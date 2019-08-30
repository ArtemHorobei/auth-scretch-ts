import React, { useEffect, useState } from 'react';
import placeholderUrl from './placeholder.svg';

import './styles.css';

interface IPropsAvatar {
    url?: string;
}

export default function Avatar({ url }: IPropsAvatar) {
    const { avatar, setAvatar } = useAvatar(url);

    return (
        <img
            className="avatar"
            src={avatar}
            alt="profileAvatar"
            onError={() => setAvatar(placeholderUrl)}
        />
    );
}

function useAvatar(url?: string) {
    const [avatar, setAvatar] = useState(url || placeholderUrl);

    useEffect(() => setAvatar(url || placeholderUrl), [url]);

    return {
        avatar,
        setAvatar
    };
}
