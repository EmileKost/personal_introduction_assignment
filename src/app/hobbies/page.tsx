'use client'

import { Flex, Heading, keyframes, Container, Box, Image } from '@chakra-ui/react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Slider from '@/components/Slider';
import { Menu } from '@/components/Menu';


const hobbies = () => {

    const firstSliderUrls = [
        'slideshowImages/slide1.jpeg',
        'slideshowImages/slide2.jpeg',
        'slideshowImages/slide3.jpeg',
        'slideshowImages/slide4.jpeg'
    ]

    const styles = {
        colorBlue: '#0019FF',
        colorWhite: '#FFFFFF',
        colorBlack: '#000000'
    }

    const itemStyles = {
        backgroundColor: '#D9D9D9',
        minWidth: '25%',
        height: '250px',
        overflow: 'hidden',
    }

    return(
        <Flex direction='column' py='60px' px='40px' height='100vh' position='relative' justify='center'>
            <Heading as='h1' fontSize={{base: '30px', md: '55px'}} px='20px' py='10px' bg={styles.colorBlue} color={styles.colorWhite}  position='absolute' top='0px' left='0px'>
                WHAT I LIKE TO DO
            </Heading>
            <Menu color={styles.colorBlue}/>
            {/* Sliders: */}
            <Slider images={firstSliderUrls} direction={'left'} delay={0}/>
            <Slider images={firstSliderUrls} direction={'right'} delay={1}/>
            <Slider images={firstSliderUrls} direction={'left'} delay={.3}/>
            <Heading as='h1' fontSize={{base: '30px', md: '55px'}}  px='20px' py='10px' bg={styles.colorBlue} color={styles.colorWhite} position='absolute' bottom='0px' right='0px'>
                IN MY FREE TIME
            </Heading>
        </Flex>
    )
}

export default hobbies;