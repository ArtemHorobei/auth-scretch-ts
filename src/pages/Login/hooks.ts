import { useEffect, useState } from 'react';
import axios from 'axios';

import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../../common/config';

export type TSession = {
    token?: string,
    type?: string,
};

export interface IUseLogin {
    sessionData: TSession,
    isLoading: boolean,
}

function useLogin(): IUseLogin {
    const [isLoading, setLoading] = useState(false);
    const [sessionData, setSessionData] = useState({ token: '', type: '' });

    function handleLogin() {
        setLoading(true);

        const oAuthCode = window.location.href.split('?code=')[1];

        if (oAuthCode) {
            axios
                .post(
                    `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`,
                    {
                        client_id: CLIENT_ID,
                        client_secret: CLIENT_SECRET,
                        code: oAuthCode,
                        redirect_uri: REDIRECT_URI,
                    },
                    {
                        headers: {
                            Accept: 'application/json',
                        },
                    },
                )
                .then(({
                    data: {
                        access_token: token,
                        token_type: type,
                    },
                }) => {
                    setSessionData({
                        token,
                        type,
                    });
                    setLoading(false);

                })
                .catch(() => setLoading(false))
        }
        setLoading(false);
    }

    useEffect(() => handleLogin(), []);

    return {
        sessionData,
        isLoading,
    };
}

export default useLogin;
