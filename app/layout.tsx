'use client';
import '@telefonica/mistica/css/reset.css';
import '@telefonica/mistica/css/roboto.css'; // https://github.com/Telefonica/mistica-web/blob/master/doc/fonts.md
import '@telefonica/mistica/css/mistica.css';
import {ThemeContextProvider, getMovistarSkin} from '@telefonica/mistica';
import NextLink from 'next/link';

import type {ThemeConfig, TrackingEvent} from '@telefonica/mistica';

/**
 * Link component that will be used by Mistica's components to perform navigations.
 * If not provided, it will produce full page reloads.
 */
const Link: ThemeConfig['Link'] = ({innerRef, children, to, ...props}) => (
    <NextLink href={to} ref={innerRef} {...props}>
        {children}
    </NextLink>
);

/**
 * Log to analytics
 * Example: https://github.com/Telefonica/opengate-consents-web/blob/main/utils/analytics.tsx
 */
const logEvent = async (trackingEvent: TrackingEvent) => {
    console.log('logEvent', trackingEvent);
};

const theme: ThemeConfig = {
    skin: getMovistarSkin(),
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    Link,
    analytics: {
        eventFormat: 'google-analytics-4',
        logEvent,
    },
};

const RootLayout = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <html lang="es">
            <body>
                <ThemeContextProvider theme={theme}>{children}</ThemeContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
