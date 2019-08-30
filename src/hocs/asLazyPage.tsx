import React, { ComponentType, ReactNode } from 'react';
import CommonPageLayout from '../layouts/CommonPageLayout';

export default function asLazyPage(
    lazyFactory: () => Promise<{ default: ComponentType }>,
    fallback: ReactNode = (
        <CommonPageLayout />
    )
) {
    const LazyComponent = React.lazy(lazyFactory);

    return ({ ...props }) => (
        <React.Suspense fallback={fallback}>
            <LazyComponent {...props} />
        </React.Suspense>
    );
}
