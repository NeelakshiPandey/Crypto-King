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
      Hey! Myself Neelakshi Pandey . I'm a 2nd Year Student Of Institute Of Engineering and Technology
     , Lucknow . I have made this project using ReactJs . Here are my other handles ... stay tuned 👍  
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
