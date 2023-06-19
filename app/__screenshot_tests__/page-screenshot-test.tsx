import {openPage, screen} from '@telefonica/acceptance-testing';

const DEVICE_DESKTOP = {
    userAgent: undefined,
    viewport: {
        width: 1280,
        height: 800,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
    },
} as const;

const DEVICE_IPHONE = {
    userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
    },
} as const;

test('Page screenshot test for desktop', async () => {
    const page = await openPage({path: '/', ...DEVICE_DESKTOP});

    await screen.findByText('¡Hola, Mundo!');

    expect(await page.screenshot({fullPage: true})).toMatchImageSnapshot();
});

test('Page screenshot test for mobile', async () => {
    const page = await openPage({path: '/', ...DEVICE_IPHONE});

    await screen.findByText('¡Hola, Mundo!');

    expect(await page.screenshot({fullPage: true})).toMatchImageSnapshot();
});
