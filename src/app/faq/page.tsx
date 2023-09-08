'use client'

import { Box, Flex, Text, Heading, keyframes, Link } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu } from '@/components/Menu';

const Faq = () => {

    const [ctaText, setCtaText] = useState(window.innerWidth < 670 ? 'Leave you alone' : 'Stop bothering my co-workers');

    useEffect(() => {
        function getCorrectContent() {
            window.innerWidth < 670 ? setCtaText('Leave you alone') : setCtaText('Stop bothering my co-workers');
        }
        window.addEventListener('resize', getCorrectContent);
    })

    const styles = {
        colorBlue: '#0019FF',
        colorWhite: '#FFFFFF',
        colorBlack: '#000000'
    }

    const getSpanInSightKeyframes = keyframes`
        0% {
            transform: translateX(-200%)
        }
        100% {
            transform: translateX(0%)
        }
    `
    const getFirstSpanInSightAnimation = `${getSpanInSightKeyframes} .3s .2s ease-out 1 forwards`;
    const getSecondSpanInSightAnimation = `${getSpanInSightKeyframes} .3s .4s ease-out 1 forwards`;
    const getThirdSpanInSightAnimation = `${getSpanInSightKeyframes} .3s .6s ease-out 1 forwards`;


    return(
        <Flex 
            direction='column' 
            align='center' 
            justify='center' 
            py='60px' 
            px='40px' 
            height='100vh' 
            width='100vw'
            overflowX='hidden'
            position='relative'
            backgroundColor={styles.colorBlue}
            >
            <Heading 
                as='h1' 
                color={styles.colorWhite} 
                position='absolute'  
                top={{base: '30px'}} 
                left='20px'
                fontSize={{base: '60px', lg: '140px'}}
                >
                    <Text as='span' display={{lg: 'block'}}>F</Text>
                    <Text as='span' display={{lg: 'block'}}>A</Text>
                    <Text as='span' display={{lg: 'block'}}>Q</Text>
                    <Flex as={motion.span} direction='column' gap='12px' mt={{base: '5px', lg: '20px'}}>
                        <Text animation={getFirstSpanInSightAnimation} as='span' w='100px' h='4px' ml='10px' borderRadius='full' background={styles.colorWhite} display="inline-block" transform='translateX(-200%)'></Text>
                        <Text animation={getSecondSpanInSightAnimation} as='span' w='100px' h='4px' ml='20px' borderRadius='full' background={styles.colorWhite} display="inline-block" transform='translateX(-200%)'></Text>
                        <Text animation={getThirdSpanInSightAnimation} as='span' w='100px' h='4px' ml='30px' borderRadius='full' background={styles.colorWhite} display="inline-block" transform='translateX(-200%)'></Text>
                    </Flex>
            </Heading>
            <Menu color='#ffffff'/>

            {/* Accordion container */}
            <Flex w='100%' justify='center'>
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
            </Flex>
            <Flex justify='center' align='center' position='absolute' right={{md: '50px'}} bottom={{base: '40px', lg: '20px'}} w='full'>
                <Link 
                    href='/finish'
                     _hover={{transform: 'scale(.95)',
                      transition: '.5s'}}  textAlign='center' 
                      position={{md: 'absolute'}} 
                      right='0px' 
                      w={{base: '80%', md: '400px'}} 
                      px='40px' 
                      py={{base: '15px', lg: '15px'}} 
                      bottom='50px' 
                      fontSize='20px' 
                      borderRadius='full' 
                      color={styles.colorBlack} 
                      background={styles.colorWhite}
                      >
                        {ctaText}
                    </Link>
            </Flex>
        </Flex>
    )
}

export default Faq;

