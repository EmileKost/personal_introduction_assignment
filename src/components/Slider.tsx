'use client'

import { Flex, Heading, keyframes, Container, Box, Image } from '@chakra-ui/react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

const VacationSlider = (props: any) => {

    // At zero precent, choose between starting point 0 or 100%
    const firstSlideShowKeyFrames = keyframes`
    0% {
        transform: translateX(${props.direction === 'left' ? '0%' : '-200%'})
    }
    100% {
        transform: translateX(${props.direction === 'left' ? '-200%' : '0%'})
    }
    `

const firstSlideAnimation = `${firstSlideShowKeyFrames} 30s ${props.delay}s infinite linear`

    const itemStyles = {
        minWidth: '50%',
        height: '250px',
        overflow: 'hidden',
    }

    const images = props.images;

    return(
            <Flex w='100%' maxWidth='90vw' overflow='hidden' py='10px' overflowX='scroll'>
                <Flex as={motion.div} animation={firstSlideAnimation} w='400%'   position='relative'>
                    {images.map((image: any) => {
                        return(
                            <Flex key={String(image)} as='div' justify='center' align='center' sx={itemStyles}>
                            <Image src={image} w='100%' h='auto' objectFit='cover'/>
                        </Flex>
                        )
                    })}
                    {images.map((image: any) => {
                        return(
                            <Flex key={String(image)} as='div' justify='center' align='center' sx={itemStyles}>
                            <Image src={image} w='100%' h='auto' objectFit='cover'/>
                        </Flex>
                        )
                    })}
                </Flex>
            </Flex>
    )
}

export default VacationSlider;