import {TfiGithub,TfiLinkedin} from "react-icons/tfi"
import {SiInstagram} from "react-icons/si"
import { Stack, VStack ,Avatar,Text, Box, HStack} from '@chakra-ui/react'
import React from 'react'
import Neelakshi from "../assets/Neelakshi1 - Copy.jpg"

const About = () => {
  return (
    <Stack  justifyItems={'center'} >
     <VStack marginTop={'5'}>
      <Avatar  boxSize={"52"}  mt={["4", "0"]} src={Neelakshi} />
       <Box 
       alignItems={'center'}
       padding={['8','14']}
       w={['100%','60%']}
       
      >
       <Text 
      fontSize={'lg'}
      textAlign={'center'}
      letterSpacing={["unset","widest"]}
      >
         Hello!
I’m Neelakshi Pandey, currently pursuing my 2nd year of studies at the Institute of Engineering and Technology, Lucknow. I’m passionate about technology and web development, and I’ve recently completed a project built with ReactJS.
         Feel free to check out my other handles below. Let’s connect and grow together! 👍
      </Text>

      <HStack marginTop={['9','14']} 
       justifyContent={'center'} 
       spacing={'9'}
       > 
       
       <a href="https://github.com/NeelakshiPandey">
        <TfiGithub  size={'30'} />
        </a>
        <a href="https://linkedin.com/in/neelakshi--pandey"> 
        <TfiLinkedin size={'30'}/>
        </a>
        <a href="https://www.instagram.com/tanupandey237/">
        <SiInstagram size={'30'} />
        </a>
      </HStack>
      </Box>
     </VStack>
    </Stack>
   
  )
}

export default About
