// could be imported from '../page', using the alias to verify that it works
import Page from '@/app/page';
import {ThemeContextProvider, getMovistarSkin} from '@telefonica/mistica';
import {render, screen} from '@testing-library/react';

test('Page renders "Hello, world" message', () => {
    render(
        <ThemeContextProvider
            theme={{skin: getMovistarSkin(), i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'}}}
        >
            <Page />
        </ThemeContextProvider>
    );
    expect(screen.getByText('¡Hola, Mundo!')).toBeInTheDocument();
});
