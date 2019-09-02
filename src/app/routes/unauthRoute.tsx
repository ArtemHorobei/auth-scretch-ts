import React, {FunctionComponent} from 'react';
import { Route } from 'react-router-dom';

import CommonPageLayout from '../../layouts/CommonPageLayout';

type Props = {
    path: string;
    exact: boolean;
    component: FunctionComponent;
}

function UnauthRoute(props: Props) {
    return (
        <CommonPageLayout>
            <Route {...props} />
        </CommonPageLayout>
    );
}

export default UnauthRoute;
