import * as React from 'react';

import { CLIENT_ID, REDIRECT_URI } from '../../common/config';
import useLogin from './hooks';

function Login(): React.FunctionComponentElement<{}> {
    const { isLoading } = useLogin();

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Login</h2>
            <button>
                <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}>
                    Login via Github
                </a>
            </button>
        </div>
    );
}

export default Login;

