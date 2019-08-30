import asLazyPage from '../../hocs/asLazyPage';

export const ListingUsers = asLazyPage(() => import('../../pages/Users'));

export const UserDetails = asLazyPage(() => import('../../pages/User'));
