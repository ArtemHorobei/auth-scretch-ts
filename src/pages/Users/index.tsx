import * as React from 'react';

import useUsers, { IUseUsers } from './hooks';
import UsersListing from '../../components/UsersListing';

const CLIENT_ID = "3e014187322f4055ddab";
const REDIRECT_URI = "https://398b43ff.ngrok.io/users";

function Users(): React.FunctionComponentElement<{}> {
    const { users, sessionData }: IUseUsers = useUsers([]);

    console.log(sessionData);

    return (
        <div>
            <a
                style={{ display: 'block', margin: '3rem 0' }}
                href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
            >
                Login
            </a>
            <UsersListing users={users} />
        </div>
    );
}

export default Users;

