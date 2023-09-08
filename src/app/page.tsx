'use client'

import { Box, Text, Container, Heading, Center, Flex, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

function Home() {

  const styles = {
    colorBlue: '#0019FF',
    colorWhite: '#FFFFFF',
    colorBlack: '#000000'
  }

  const aboutMeListStyles = {
    listStyle: 'none',
    py: '10px',
    px: '20px',
    border: '1px solid #0019FF',
    w: 'fit-content',
    h: 'fit-content',
    borderRadius: 'full',
    fontSize: 'xl'
  }

  const linkListStyles = {
    pb: '5px',
    borderBottom: `1px solid ${styles.colorWhite}`,
    listStyle: 'none',
    fontSize: '40px',
    color: styles.colorWhite,
    fontFamily: 'body'
  }

  const [textContent, setTextContent] = useState(window.innerWidth < 670 ? 'Breaking the code once' : 'Probably going to ruin your code once');
  const [musicTextContent, setMusicTextContent] = useState(window.innerWidth < 670 ? 'Love for music' : 'Love for music and festivals');

  useEffect(() => {
    function getGoodContentOnResize() {
      if(window.innerWidth < 670) {
        setTextContent('Breaking the code once')
      } else {
        setTextContent('Probably going to ruin your code once');
      }
    }
   
    window.addEventListener('resize', getGoodContentOnResize);
  })

  useEffect(() => {
    function getGoodContentOnResize() {
      if(window.innerWidth < 670) {
        setMusicTextContent('Love for music')
      } else {
        setMusicTextContent('Love for music and festivals');
      }
    }
   
    window.addEventListener('resize', getGoodContentOnResize);
  })

  return (
    <Flex direction='column' py='60px' px='40px' height='100vh'>
      <Box p='20px' mb='50px'>
        <Heading as='h1' color='blue' fontSize={{base: '50px', sm:'65px', md:'96px'}}>
          Who am I?
        </Heading>
        <Text fontFamily="body"  color={styles.colorBlack} fontSize='xl' maxWidth='600px' pl={{base: '0px', md: '40px'}}>
          Hi, nice to meet all of you! I will be the frontend intern for the next 20 weeks! I hope this webpage will give you some background information about me!
        </Text>
      </Box>

    {/* Introduction list of myself */}
      <Flex direction='row' wrap='wrap' position='relative'>
        <UnorderedList w='100%' maxWidth='800px' display='flex' flexWrap='wrap' gap='10px' textAlign='center'>
          <ListItem fontFamily='bodyItalic' bg={styles.colorBlue} w='fit-content' py='10px' px='70px' borderRadius='full' color={styles.colorWhite} fontSize='xl'>
            {textContent}
          </ListItem>
          <ListItem sx={aboutMeListStyles} ml={{base: '0px', md:'20px'}}>
            {musicTextContent}
          </ListItem>
          <ListItem sx={aboutMeListStyles}>
            Front-end intern
          </ListItem>
          <ListItem sx={aboutMeListStyles}>
            Enthusiastic
          </ListItem>
          <ListItem sx={aboutMeListStyles} ml={{base: '0px', md:'40px'}}>
            Like to travel
          </ListItem>
          <ListItem sx={aboutMeListStyles}>
            Energetic
          </ListItem>
          <ListItem sx={aboutMeListStyles}>
            Cat lover
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex 
        position='absolute' 
        height={{base: 'auto', xl: '100vh'}} 
        w={{base: '100vw', xl: '400px'}} 
        bottom={{base: '0px'}} 
        right="0px" bg={styles.colorBlue} 
        direction='column' justify='end'
        py='70px'
        px='10px'
        >
        <Heading as='h2' px='20px' py='10px' color={styles.colorWhite}>
          <Text as='span' display='block' fontSize='60px' fontFamily='bodyExtraItalic'>
            DISCOVER
          </Text>
          <Text as='span' display='block' fontSize='130px' whiteSpace='nowrap' fontFamily='bodyExtraItalic'>
            ME...
          </Text>
        </Heading>
        <UnorderedList pr={{base: '50px', sm: '100px', md: '100px', lg: '10px'}}>
          <ListItem sx={linkListStyles}>
            <Link _hover={{opacity: '.5', transition: '.5s', textDecoration: 'none'}} href='/'>Who am I?</Link>
          </ListItem>
          <ListItem sx={linkListStyles}>
            <Link _hover={{opacity: '.5', transition: '.5s', textDecoration: 'none'}} href='/hobbies'>In my free time</Link>
          </ListItem>
          <ListItem sx={linkListStyles}>
            <Link  _hover={{opacity: '.5', transition: '.5s', textDecoration: 'none'}} href='/faq'>FAQ</Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  )
}

export default Home;