import asLazyPage from '../../hocs/asLazyPage';

export const Login = asLazyPage(() => import('../../pages/Login'));

export const ListingUsers = asLazyPage(() => import('../../pages/Users'));

export const UserDetails = asLazyPage(() => import('../../pages/User'));
