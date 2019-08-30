import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './redux/configureStore';
import AppRoutes from './routes';

import './style.css';

function AppRoot(): React.FunctionComponentElement<{}> {
    return (
        <Provider store={configureStore()}>
            <ConnectedRouter history={history}>
                <AppRoutes />
            </ConnectedRouter>
        </Provider>
    );
}

export default AppRoot;
