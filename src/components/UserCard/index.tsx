import * as React from 'react';

import { TUser } from "../../pages/Users/hooks";
import Avatar from "../Avatar";

import './styles.css';

type Props = {
    user: TUser,
}

function UsersListing(props: Props): React.FunctionComponentElement<{}> {

    return (
        <div className="UserCard">
            <Avatar url={props.user.avatar_url} />
            <span className="UserCard_login">{props.user.login}</span>
        </div>
    );
}

export default UsersListing;
