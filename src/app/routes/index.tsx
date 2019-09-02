import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import RoutePaths from './paths';
import {
    Login,
    ListingUsers,
    UserDetails,
} from './lazyPages';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import Loader from '../../components/Loader';
import AuthRoute from './authRoute';
import UnauthRoute from './unauthRoute';

export default function AppRoutes() {
    return (
        <React.Suspense fallback={<Loader />}>
            <header>
                <Header />
            </header>

            <main>
                <Switch>
                  <UnauthRoute
                    path={RoutePaths.LOGIN.INDEX}
                    exact
                    component={Login}
                  />

                  <AuthRoute
                    path={RoutePaths.USERS.INDEX}
                    exact
                    component={ListingUsers}
                  />

                  <AuthRoute
                    path={RoutePaths.USER.INDEX}
                    exact
                    component={UserDetails}
                  />

                  <Redirect to={RoutePaths.USERS.INDEX} />
                </Switch>

            </main>

            <footer>
                <Footer />
            </footer>
        </React.Suspense>
    );
}
