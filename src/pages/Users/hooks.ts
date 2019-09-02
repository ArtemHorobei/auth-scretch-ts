import { useEffect, useState } from "react";
import axios from "axios";

import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../../common/config';

export type TUser = {
    avatar_url: string,
    login: string,
    node_id: string,
};

export interface IUseUsers {
    users: TUser[],
    oAuthCode?: string,
    sessionData?: {
        token?: string,
        type?: string,
    }
}

function useUsers(initialState: []): IUseUsers {
    const [users, setUsers] = useState(initialState);
    const [oAuthCode, setOauthCode] = useState('');
    const [sessionData, setSessionData] = useState({ token: '', type: '' });

    useEffect(() => {
        axios
            .get('https://api.github.com/users')
            .then(({ data }) => setUsers(data))
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        const oAuthCode = window.location.href.split('?code=')[1];
        if (oAuthCode) {
            setOauthCode(oAuthCode);
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
                }) => setSessionData({
                    token,
                    type,
                }));
        }
    }, []);

    return {
        users,
        oAuthCode,
        sessionData,
    };
}

export default useUsers;
