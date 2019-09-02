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

export default function AppRoutes() {
    return (
        <React.Suspense fallback={<Loader />}>
            <Switch>
                <Route
                    path={RoutePaths.LOGIN.INDEX}
                    exact
                    component={Login}
                />

                <header>
                    <Header />
                </header>

                <main>
                    <Route
                        path={RoutePaths.USERS.INDEX}
                        exact
                        component={ListingUsers}
                    />

                    <Route
                        path={RoutePaths.USER.INDEX}
                        exact
                        component={UserDetails}
                    />

                    <Redirect to={RoutePaths.USERS.INDEX} />
                </main>

                <footer>
                    <Footer />
                </footer>
            </Switch>
        </React.Suspense>
    );
}
