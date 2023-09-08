'use client'

import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '../provider';
import { N27Bold, N27RegularItalic, N27Regular, N27ExtraItalic } from '@/Fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${N27Bold.variable} ${N27RegularItalic.variable} ${N27Regular.variable} ${N27ExtraItalic.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
