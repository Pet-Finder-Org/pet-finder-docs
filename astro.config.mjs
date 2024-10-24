// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from 'rehype-mermaid';
import {brainDbAstro} from '@braindb/astro'

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [[rehypeMermaid, {strategy: "img-svg", dark: true}],],
    },
    integrations: [
        brainDbAstro(),
        starlight({
            title: 'Pet Finder',
            lastUpdated: true,
            defaultLocale: 'ptBr',
            locales: {
                ptBr: {
                    label: 'Português (Brasil)',
                    lang: 'pt-br',
                },
            },
            sidebar: [
                {
                    label: 'Organizacional',
                    autogenerate: {directory: 'organizational'},
                },
                {
                    label: 'Aplicativos',
                    autogenerate: {directory: 'apps'}
                }
            ],
        }),
    ],
});
