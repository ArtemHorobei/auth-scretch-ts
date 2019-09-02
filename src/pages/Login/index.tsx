import * as React from 'react';

import { CLIENT_ID, REDIRECT_URI } from '../../common/config';
import useLogin from './hooks';

function Login(): React.FunctionComponentElement<{}> {
    const { sessionData, isLoading } = useLogin();

    console.log(sessionData, isLoading);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            Login via GitHub
            <a
                style={{ display: 'block', margin: '3rem 0' }}
                href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
            >
                Login
            </a>
        </div>
    );
}

export default Login;

