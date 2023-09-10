
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

    const animationKeyFrames = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `

    const insightAnimation = `${animationKeyFrames} 2s .8s 1 forwards ease-out`

    return(
        <Flex direction='column' align='center' justify='center' py='60px' px='40px' height='100vh' position='relative' backgroundColor={styles.colorBlue}>
            <Heading 
                as={motion.h1}
                fontSize={{base: '10vw'}}
                color={styles.colorWhite}
                animation={insightAnimation}
                opacity={'0'}
                >
                <Text as={motion.span} display='block'>THANK YOU</Text>
                <Text as={motion.span} display='block'>FOR</Text>
                <Text as={motion.span} display='block'>LISTENING.</Text>
            </Heading>
        </Flex>
    )
}

export default Finish;