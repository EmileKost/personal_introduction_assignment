import { Global } from "@emotion/react"
import localFont from 'next/font/local'

const Fonts = () => (
    <Global
    styles={`
        @font-face {
            font-family: 'n27-bold',
            font-display: 'swap',
            src: url('./fonts/n27-bold-webfont.woff2') format('woff2')
        }
    `}
/>
)

export const N27Bold = localFont({
    src: [
        {
            path: '../public/fonts/n27-bold-webfont.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-n27-bold'
})

export const N27RegularItalic = localFont({
    src: [
        {
            path: '../public/fonts/n27-regularitalic-webfont.woff2',
            weight: '300',
            style: 'italic'
        }
    ],
    display: 'swap',
    variable: '--font-n27-italic'
})

export const N27ExtraItalic = localFont({
    src: [
        {
            path: '../public/fonts/n27-extralightitalic-webfont.ttf',
            weight: '200',
            style: 'italic'
        }
    ],
    display: 'swap',
    variable: '--font-n27-extraItalic'
})

export const N27Regular = localFont({
    src: [
        {
            path: '../public/fonts/n27-regular-webfont.ttf',
            weight: '400',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-n27-regular'
})


export default Fonts