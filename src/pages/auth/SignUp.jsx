import React, { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewOffIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom';



// const SignUpDetails = {
//   name: "",
//   email: "",
//   confirmMail: "",
//   password: ""
// }
export const SignUp = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmMail, setConfirmMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleOncliCk = () => {
    console.log(name, email, confirmMail, password);
    if (email !== confirmMail) {
      alert("please enter correct mail id")
    }
    else {
      let payload = {
        "email": email,
        "password": password,
        "creator_mode": {
          "creatormode_name": name,
          "bgImg": "",
          "profilePic": "",
          "creatorType": "",
          "posts": [],
          "tiers": [],
          "subscriber_patrons": []
        },
        "patron_mode": {
          "subscribed_to": []
        }
      }

        fetch(`https://patreon-data.herokuapp.com/users`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/login");
          })
          .catch((err) => console.log(err));
      
    }

  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} minW={"lg"} maxW={'xlg'} py={12} px={6}>
        <Stack align={'center'}>
          <Text fontSize={'1xl'}>Sign Up</Text>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={3}>
            <Button
              bg={'white'} border={"2px solid grey"}
              color={'black'}
              _hover={{
                bg: 'white',
              }}>
              <img style={{ width: "22px", paddingRight: "5px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAZlBMVEX///8AAAD29vZBQUEQEBClpaXBwcH7+/vz8/Pg4OAnJyfb29u9vb1TU1Ovr6+Tk5PU1NTNzc3q6uqampqMjIzHx8dycnJiYmJNTU0yMjIWFhY5OTlHR0dcXFxtbW23t7d9fX0fHx8x+pfAAAADnklEQVRoge2b53ajMBCFJdOLMRg3XOP3f8nYzqZsclVmNJA9Z31/g76DymgaSj311FP/uWZF263TOl13bZVPxWzr1XwoY/2uuByOm6ZbjkrNimZ70FjlfNGN9fXLfm6gvuuwqTJ5bnp2YN8UJcIfnpgmGWglyE78sW9soTmv90TwTY0At3JtK6x5FcjNFizuXX0QuNixwVpvA3ZaHcC9qWTP+CoMfFPKA2+DwVonDG5+FADrkr7Wy0gCHNHBuQj4OCODlchU7xhGVGJz6RMD7GW44iHaHYerKNhpQE79+tP5ybsEXd1nOlcVduwGmYf25dtTLwxwZrPVZW86J3kyfHluxQDbFnlv5D7YfRwErszgs8uzLbYBYGV2BC4ebz8mbMECG/d15OfKp1ywig1g70PSMl0wk5fJWzmKDGDmBBJk+OSX0cHZAMG70cH3jYk0QYCMgzamG0fR8pcWWakega8TzHUGDadEbOYSvJcjhhNHVvNbnwzdvmGKT56hhMT49vqmFk12MQUZ3czHKcAwZp1ksqEb1NlfyWZEYecf3VOOMKEZIpIOMHcyK3+CS8c0UfNk2KcqgAfmcr7I5DkaBR0qlxNEJsNIvgMPulJaZPIeuc5r8KDLaJPJ0DIhT8gVVdDJKEOGTFgtTm5/7ZsReZp1RuRJ9jYkT3Ke4Q5DNmwrTkanahK7HcMgnHFXkcklJDPuZzJ5Bx1Khk9CJp/gMAw/LNGxWajWhK9dad8zB8PhYyrtb1/AcIaAWDjG2IDhDJkt2bgqB6d0METEsrEkuoFMfp1s/IzWzngDSeYMYOLWWLOTzJOcwEh78+NyuSGY37J8g1g+LIPF8rXlBakcIDrLWtveEMp7QsvgsIeYTDSiyKXTlp39kER+21AJca2ZqY/Cv/AF7zxt3V8PGesYB8+WJNMA7m0aVrvBdvAut1UIqVepApmuh7Af9LfYNTq1tLyKgovvYtYlVbEyVZy079ng1GLzxtrk49voQKs/z9rLytXD5fDbPyVSc/8iQrlLpM/gQ6TsqUhvxR/RvBqZfpKHYp8D9UUyPTR3kV0amb4hni8lss1cNxQWvxPvXXtub1pgT5xvhwBSUB+g3rC5Kqj38ep1n1vE7PfUW4GCE6fH9SpUtCZnYjiNhyY2oZe5FOTetfbr39anWr553N2zrneLkdr1bX36+nBuihF65T/1498EfS2jU59WU1Sq1cf/GHXaddVyIuZTTz31z+oVanIyNgygb1gAAAAASUVORK5CYII=" alt="" /> Continue with Google
            </Button>
            <Button
              bg={'white'} border={"2px solid grey"}
              color={'black'}
              _hover={{
                bg: 'white',
              }}>
              <img style={{ width: "22px", paddingRight: "5px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTb6CEJg9INtyaf2J8APb69gsPOznqz7eQDw&usqp=CAU" alt="" />Continue with Facebook
            </Button>
            <Text align={'center'} fontSize={'1xl'}>or</Text>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="firstName">
              <Text color={'gray'}>Name </Text>
              <Input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" />
            </FormControl>
            <FormControl id="email">
              <Text color={'gray'}>Email </Text>
              <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="lastName">
              <Text color={'gray'}>Confirm email</Text>
              <Input name="confirmMail" value={confirmMail} onChange={(e) => setConfirmMail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <Text color={'gray'}>Password</Text>
              <Input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </FormControl >
            <Stack spacing={10}>
              <Button
                onClick={handleOncliCk}
                bg={'blue.600'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
              <Text align={'center'} fontSize={'1xl'}>By signing up, you agree to Patreon's Terms of Use, Privacy Policy<br /> and Cookie Policy.</Text>
            </Stack>
          </Stack>
        </Box>
        <Text align={'center'} fontSize={'1xl'}>Already have an account? <Button padding={"0px"} onClick={() => { navigate("/login") }} bg={'heritance'}><Link to={"/login"} color={'blue.400'}>Log in</Link></Button></Text>
      </Stack>
    </Flex>
  );
}
