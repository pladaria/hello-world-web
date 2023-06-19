import {openPage, screen} from '@telefonica/acceptance-testing';

test('Page screenshot test for desktop', async () => {
    await openPage({path: '/'});
    await screen.findByText('¡Hola, Mundo!');
});
