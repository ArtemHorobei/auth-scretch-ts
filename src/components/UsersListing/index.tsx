import * as React from 'react';

import { IUseUsers, TUser } from "../../pages/Users/hooks";
import Avatar from "../Avatar";

import './styles.css';

function UsersListing({ users }: IUseUsers): React.FunctionComponentElement<{}> {
    if (!users.length) return <div className="UsersListing">There are no users!</div>;

    return (
        <div className="UsersListing">
            {
                users
                    .map(({ node_id, login, avatar_url }: TUser) => (
                        <div key={node_id} className="UsersListing_avatar">
                            <Avatar url={avatar_url} />
                            <span className="UsersListing_login">{login}</span>
                        </div>
                    ))
            }
        </div>
    );
}

export default UsersListing;
