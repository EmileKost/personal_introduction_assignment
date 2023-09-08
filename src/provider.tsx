
'use client'

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import theme from "./theme";
import Fonts from "./Fonts";


export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <CacheProvider>
            <ChakraProvider theme={theme} resetCSS>
            {/* <Fonts/> */}
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}