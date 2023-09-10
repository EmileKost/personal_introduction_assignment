
'use client'

import { Box, Flex, Text, Heading, keyframes, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Menu = (props: any) => {

    return(
        <UnorderedList
            position='absolute'
            right='40px'
            top={{base: '50px'}}
            fontSize={{base:'20px', lg: '35px'}}
            listStyleType='none'
            color={props.color}
            textAlign='right'
            zIndex={'2'}
        >
            <ListItem>
                <Link  _hover={{opacity: '.5', transition: '.5s', textDecoration: 'none'}} href='/'>Hobbies</Link>
            </ListItem>
            <ListItem>
                <Link  _hover={{opacity: '.5', transition: '.5s', textDecoration: 'none'}} href='/hobbies'>Hobbies</Link>
            </ListItem>
            <ListItem>
                <Link  _hover={{opacity: '.5', transition: '.5s', textDecoration: 'none'}} href='/faq'>FAQ</Link>
            </ListItem>
        </UnorderedList>
    )
}

