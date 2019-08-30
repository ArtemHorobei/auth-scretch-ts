import * as React from 'react';

import useUsers, { IUseUsers } from './hooks';
import UsersListing from '../../components/UsersListing';

function Users(): React.FunctionComponentElement<{}> {
    const { users }: IUseUsers = useUsers([]);

    return <UsersListing users={users} />;
}

export default Users;

