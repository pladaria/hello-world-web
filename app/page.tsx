'use client';
import {ResponsiveLayout, Hero, Image} from '@telefonica/mistica';

import type {NextPage} from 'next';

const Home: NextPage = () => {
    return (
        <ResponsiveLayout>
            <Hero
                media={<Image src="/background.jpg" aspectRatio="1:1" />}
                title="¡Hola, Mundo!"
                description="Esta es una página de ejemplo"
                desktopMediaPosition="right"
            />
        </ResponsiveLayout>
    );
};

export default Home;
