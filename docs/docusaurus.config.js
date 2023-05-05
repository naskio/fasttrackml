// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'FastTrackML',
    tagline: 'MLFlow tracking server focused on scalability',
    favicon: 'favicon.ico',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // https://naskio.github.io/fasttrack/
    url: 'https://naskio.github.io',
    baseUrl: '/fasttrack/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'naskio', // Usually your GitHub org/user name.
    projectName: 'fasttrack', // Usually your repo name.

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/naskio/fasttrack/edit/main/docs/',
                    exclude: ['**/example/**'],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'logo/project-logo-light.png', // project's social card
            navbar: {
                title: 'FastTrackML',
                logo: {
                    alt: 'FastTrackML logo',
                    src: 'logo/project-icon.png',
                    // src: 'logo/project-logo-light.png',
                    // srcDark: 'logo/project-logo-dark.png',
                },
                items: [
                    // left
                    {
                        to: '/docs/quickstart',
                        label: 'Quick Start',
                        position: 'left',
                        activeBaseRegex: `dummy-never-match`,
                    },
                    {
                        to: '/docs/developer',
                        label: `Developer's Guide`,
                        position: 'left',
                        activeBaseRegex: `dummy-never-match`,
                    },
                    // right
                    {
                        href: 'https://github.com/G-Research/fasttrack',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://twitter.com/oss_gr',
                        label: 'Twitter',
                        position: 'right',
                    },
                ],
            },
            footer: {
                // style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Quick Start',
                                to: '/docs/quickstart',
                            },
                            {
                                label: `Developer's Guide`,
                                to: '/docs/developer',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/mlflow+tracking',
                            },
                            {
                                label: 'GitHub Issues',
                                href: 'https://github.com/G-Research/fasttrack/issues',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/G-Research/fasttrack',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/oss_gr',
                            },
                            {
                                label: 'G-Research Open-Source',
                                href: 'https://opensource.gresearch.co.uk/',
                            },
                        ],
                    },
                ],
                logo: {
                    alt: 'G-Research Open-Source Software',
                    src: 'logo/organization.png',
                    srcDark: 'logo/organization-dark.png',
                    href: 'https://opensource.gresearch.co.uk/',
                },
                copyright: `Copyright © ${new Date().getFullYear()} FastTrackML.`,
            },
            announcementBar: {
                // https://docusaurus.io/docs/api/themes/configuration#announcement-bar
                id: 'announcement-bar--support-us-1', // increment on change
                content: `⚠️ FastTrackML is still a work in progress and subject to change. 🚧 🚧 🚧`,
                isCloseable: true,
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: 'bash',
                additionalLanguages: ['python', 'powershell'],
            },
            metadata: [{name: 'twitter:card', content: 'summary'}],
        }),
};

module.exports = config;
