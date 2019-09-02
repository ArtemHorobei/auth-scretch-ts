import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import UserCard from "../../components/UserCard";

function User(): React.FunctionComponentElement<{}> {
    const token = window.localStorage.getItem('token');

    const [loading, setLoading] = useState(false);
    const [user, setUser]: any = useState(null);

    useEffect(() => {
        setLoading(true);

        axios
            .get('https://api.github.com/user', { headers: { Authorization: `token ${token}` } })
            .then(({ data: user }) => {
                    setUser(user);
                    setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [token]);

    if (loading) return <div>Loading...</div>;

    if (!user) return <div>No user...</div>;

    return (
        <UserCard user={user} />
    );
}

export default User;
