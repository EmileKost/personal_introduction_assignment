
'use client'

import { Box, Flex, Text, Heading, keyframes, Link } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Finish = () => {

    const styles = {
        colorBlue: '#0019FF',
        colorWhite: '#FFFFFF',
        colorBlack: '#000000'
    }

    const headingSpanStyles = {
        display: 'block',
        fontSize: '200px',
    }

    return(
        <Flex direction='column' align='center' justify='center' py='60px' px='40px' height='100vh' position='relative' backgroundColor={styles.colorBlue}>
            <Heading 
                as='h1'
                fontSize={{base: '10vw'}}
                color={styles.colorWhite}
                >
                <Text as={motion.span} display='block'>THANK YOU</Text>
                <Text as={motion.span} display='block'>FOR</Text>
                <Text as={motion.span} display='block'>LISTENING.</Text>
            </Heading>
        </Flex>
    )
}

export default Finish;