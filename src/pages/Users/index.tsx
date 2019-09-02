import * as React from 'react';

import { CLIENT_ID, REDIRECT_URI } from '../../common/config';
import useUsers, { IUseUsers } from './hooks';
import UsersListing from '../../components/UsersListing';

function Users(): React.FunctionComponentElement<{}> {
    const { users }: IUseUsers = useUsers([]);

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

