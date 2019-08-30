import * as React from 'react';

import useUsers, { IUseUsers } from './hooks';
import UsersListing from '../../components/UsersListing';

function Users(): React.FunctionComponentElement<{}> {
    const { users }: IUseUsers = useUsers([]);

    if (!users.length) return <div style={{ margin: '3rem 0' }}>There are no users!</div>;

    return <UsersListing users={users} />;
}

export default Users;

