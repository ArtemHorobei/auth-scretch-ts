import { useEffect, useState } from "react";
import axios from "axios";

export type TUser = {
    avatar_url: string,
    login: string,
    node_id?: string,
};

export interface IUseUsers {
    users: TUser[],
}

function useUsers(initialState: []): IUseUsers {
    const [users, setUsers] = useState(initialState);

    useEffect(() => {
        axios
            .get('https://api.github.com/users')
            .then(({ data }) => setUsers(data))
            .catch(e => console.log(e));
    }, []);

    return {
        users,
    };
}

export default useUsers;
