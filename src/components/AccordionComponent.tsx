import { Box, Flex, Text, Heading, keyframes, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const AccordionComponent = () => {
    return(
        <Accordion 
        allowToggle 
        w='100%' 
        maxWidth='900px' 
        ml={{base: '0', lg: '200px'}}
        >
        <AccordionItem py='10px' borderTop='none' borderBottomWidth='2px'>
            <Heading as='h2' color={styles.colorWhite} _hover={{opacity: '.5', backGround:'none', transition: '.5s'}} fontFamily='body'>
                <AccordionButton _hover={{backGround: 'transparent'}}>
                    <Text as='span' fontSize={{base: '28px', sm: '32px', md: '40px'}} textAlign='start'>Which food are you most addicted to?</Text>
                </AccordionButton>
            </Heading>
            <AccordionPanel fontFamily='body'>
                <Text as='p' fontSize={{base: '20px', md: '25px'}} color={styles.colorWhite}>
                    Burgersss, jummmm. And of course some other healthy stuff ;)
                </Text>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem py='10px' borderTop='none' borderBottomWidth='2px'>
            <Heading as='h2' color={styles.colorWhite} _hover={{opacity: '.5', backGround:'none', transition: '.5s'}} fontFamily='body'>
                <AccordionButton _hover={{backGround: 'transparent'}}>
                    <Text as='span' fontSize={{base: '28px', sm: '32px', md: '40px'}} textAlign='start' fontFamily='body'>What is your most emberrasing moment?</Text>
                </AccordionButton>
            </Heading>
            <AccordionPanel>
                <Text as='p' fontSize={{base: '20px', md: '25px'}} color={styles.colorWhite} fontFamily='body'>
                    When I found out my bed was on fire after a wild
                    night of going out... woops.
                </Text>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem py='10px' borderTop='none' borderBottomWidth='2px'>
            <Heading as='h2' color={styles.colorWhite} _hover={{opacity: '.5', backGround:'none', transition: '.5s'}} fontFamily='body'>
                <AccordionButton _hover={{backGround: 'transparent'}}>
                    <Text as='span' fontSize={{base: '28px', sm: '32px', md: '40px'}} textAlign='start'>Any guilty pleasures?</Text>
                </AccordionButton>
            </Heading>
            <AccordionPanel>
                <Text as='p' fontSize={{base: '20px', md: '25px'}} color={styles.colorWhite} fontFamily='body'>
                    Me and my girlfriend love to watch documentaries 
                    about dancing birds and just laugh as hard as possible
                </Text>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem py='10px' borderTop='none' borderBottomWidth='2px !important'>
            <Heading as='h2' color={styles.colorWhite} _hover={{opacity: '.5', backGround:'none', transition: '.5s'}} fontFamily='body'>
                <AccordionButton _hover={{backGround: 'transparent'}}>
                    <Text as='span' fontSize={{base: '28px', sm: '32px', md: '40px'}} textAlign='start'>Favourite kind of music?</Text>
                </AccordionButton>
            </Heading>
            <AccordionPanel>
                <Text as='p' fontSize={{base: '20px', md: '25px'}} color={styles.colorWhite} fontFamily='body'>
                    I love lots of different music like Hip Hop and House, but I also
                    love artist like FKJ, FredAgain and many more.
                </Text>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
    )
}