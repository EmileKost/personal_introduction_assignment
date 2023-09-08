'use client'

import { Flex, Heading, keyframes, Container, Box, Image } from '@chakra-ui/react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

const VacationSlider = (props: any) => {

    // At zero precent, choose between starting point 0 or 100%
    const firstSlideShowKeyFrames = keyframes`
    0% {
        transform: translateX(${props.direction === 'left' ? '0%' : '-100%'})
    }
    100% {
        transform: translateX(${props.direction === 'left' ? '-100%' : '0%'})
    }
    `

const firstSlideAnimation = `${firstSlideShowKeyFrames} 20s ${props.delay}s infinite linear`

    const itemStyles = {
        minWidth: '25%',
        height: '200px',
        overflow: 'hidden',
    }

    const images = props.images;

    return(
            <Flex w='100%' maxWidth='90vw' overflow='hidden' py='10px' overflowX='scroll'>
                <Flex as={motion.div} animation={firstSlideAnimation} w='200%'   position='relative'>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[0]} w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[1]} w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[2]}w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[3]} w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[0]} w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[1]} w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[2]}w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                    <Flex as='div' justify='center' align='center' sx={itemStyles}>
                        <Image src={images[3]} w='100%' h='auto' objectFit='cover'/>
                    </Flex>
                </Flex>
            </Flex>
    )
}

export default VacationSlider;