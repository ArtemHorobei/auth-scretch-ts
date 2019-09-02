import * as React from 'react';

import { IUseUsers, TUser } from "../../pages/Users/hooks";
import UserCard from "../UserCard";

function UsersListing({ users }: IUseUsers): React.FunctionComponentElement<{}> {
    if (!users.length) return <div>There are no users!</div>;

    return (
        <div>
            {
                users
                    .map(({ node_id, login, avatar_url }: TUser) => (
                        <div key={node_id}>
                            <UserCard
                                user={{
                                    avatar_url,
                                    login,
                                }}
                            />
                        </div>

                    ))
            }
        </div>
    );
}

export default UsersListing;
