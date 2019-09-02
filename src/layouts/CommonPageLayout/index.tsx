import * as React from 'react';
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

function CommonPageLayout(props: Props): React.FunctionComponentElement<{}> {
    return (
        <div style={{ margin: '3rem 0' }}>
            {props.children}
        </div>
    );
}

export default CommonPageLayout;
