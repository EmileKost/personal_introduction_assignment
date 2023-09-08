import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        blue: '#0019FF',
        loadingGrey: '#D9D9D9',
        white: '#FFFFFF'
    },
    fonts: {
        heading: `var(--font-n27-bold), sans-serif`,
        bodyItalic: `var(--font-n27-italic), sans-serif`,
        bodyExtraItalic: `var(--font-n27-extraItalic), sans-serif`,
        body: `var(--font-n27-regular)`,
    }
})

export default theme;