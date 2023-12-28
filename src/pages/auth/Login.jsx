import React from 'react'
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
import { handleUserLoginFetch } from '../../redux/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


  const loginDetails={
    email:"",
    password:""
  }
export const Login=()=> {
    // console.log("rendering Login");
  const navigate = useNavigate()
    const [userAuthData, setUserAuthData]=React.useState(loginDetails)
    const {email, password}=userAuthData
    const dispatch=useDispatch();
    const  {token}  = useSelector(state => state.auth);
    const handleOnChange=(e)=>{
    const {name, value}=e.target
    setUserAuthData(prev=> ({...prev,[name]:value}));
    // console.log(userAuthData)
    }

    const handleOncliCk=()=>{
        console.log(userAuthData)
        dispatch(handleUserLoginFetch(userAuthData))
        setUserAuthData(loginDetails);

    }


    return (
      <>
      {
      token === null? 
      (<Flex
        minH={'100vh'} 
        align={'center'}
        justify={'center'}
        bg='gray.50'>
        <Stack spacing={8} mx={'auto'} minW={"lg"} maxW={'xlg'} py={12} px={6}>
          <Stack align={'center'}>
            <Text fontSize={'3xl'}>Log in</Text>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text> */}
          </Stack>
          <Box
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <Text  color={'gray'}>Email </Text>
                <Input name="email" value={email} onChange={handleOnChange} type="email" />
              </FormControl>
              <FormControl id="password">
                <Text color={'gray'}>Password</Text>
                <Input name="password" value={password} onChange={handleOnChange} type="password" />
              </FormControl >
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link  color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Stack spacing={3}>
                <Button
                onClick={handleOncliCk}
                  bg={'blue.600'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  >
                  Log in
                </Button>
                <Text align={'center'} fontSize={'1xl'}>or</Text>
                <Button
                  bg={'white'} border={"2px solid grey"}
                  color={'black'}
                  _hover={{
                    bg: 'white',
                  }}>
                <img style={{width:"22px",paddingRight:"5px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAZlBMVEX///8AAAD29vZBQUEQEBClpaXBwcH7+/vz8/Pg4OAnJyfb29u9vb1TU1Ovr6+Tk5PU1NTNzc3q6uqampqMjIzHx8dycnJiYmJNTU0yMjIWFhY5OTlHR0dcXFxtbW23t7d9fX0fHx8x+pfAAAADnklEQVRoge2b53ajMBCFJdOLMRg3XOP3f8nYzqZsclVmNJA9Z31/g76DymgaSj311FP/uWZF263TOl13bZVPxWzr1XwoY/2uuByOm6ZbjkrNimZ70FjlfNGN9fXLfm6gvuuwqTJ5bnp2YN8UJcIfnpgmGWglyE78sW9soTmv90TwTY0At3JtK6x5FcjNFizuXX0QuNixwVpvA3ZaHcC9qWTP+CoMfFPKA2+DwVonDG5+FADrkr7Wy0gCHNHBuQj4OCODlchU7xhGVGJz6RMD7GW44iHaHYerKNhpQE79+tP5ybsEXd1nOlcVduwGmYf25dtTLwxwZrPVZW86J3kyfHluxQDbFnlv5D7YfRwErszgs8uzLbYBYGV2BC4ebz8mbMECG/d15OfKp1ywig1g70PSMl0wk5fJWzmKDGDmBBJk+OSX0cHZAMG70cH3jYk0QYCMgzamG0fR8pcWWakega8TzHUGDadEbOYSvJcjhhNHVvNbnwzdvmGKT56hhMT49vqmFk12MQUZ3czHKcAwZp1ksqEb1NlfyWZEYecf3VOOMKEZIpIOMHcyK3+CS8c0UfNk2KcqgAfmcr7I5DkaBR0qlxNEJsNIvgMPulJaZPIeuc5r8KDLaJPJ0DIhT8gVVdDJKEOGTFgtTm5/7ZsReZp1RuRJ9jYkT3Ke4Q5DNmwrTkanahK7HcMgnHFXkcklJDPuZzJ5Bx1Khk9CJp/gMAw/LNGxWajWhK9dad8zB8PhYyrtb1/AcIaAWDjG2IDhDJkt2bgqB6d0METEsrEkuoFMfp1s/IzWzngDSeYMYOLWWLOTzJOcwEh78+NyuSGY37J8g1g+LIPF8rXlBakcIDrLWtveEMp7QsvgsIeYTDSiyKXTlp39kER+21AJca2ZqY/Cv/AF7zxt3V8PGesYB8+WJNMA7m0aVrvBdvAut1UIqVepApmuh7Af9LfYNTq1tLyKgovvYtYlVbEyVZy079ng1GLzxtrk49voQKs/z9rLytXD5fDbPyVSc/8iQrlLpM/gQ6TsqUhvxR/RvBqZfpKHYp8D9UUyPTR3kV0amb4hni8lss1cNxQWvxPvXXtub1pgT5xvhwBSUB+g3rC5Kqj38ep1n1vE7PfUW4GCE6fH9SpUtCZnYjiNhyY2oZe5FOTetfbr39anWr553N2zrneLkdr1bX36+nBuihF65T/1498EfS2jU59WU1Sq1cf/GHXaddVyIuZTTz31z+oVanIyNgygb1gAAAAASUVORK5CYII=" alt="" /> Continue with Google
                </Button>
                <Button
                  bg={'white'} border={"2px solid grey"}
                  color={'black'}
                  _hover={{
                    bg: 'white',
                  }}>
                 <img style={{width:"22px",paddingRight:"5px"}} src="data:image/png;base64,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" alt="" />Continue with Apple
                </Button>
                <Button
                  bg={'white'} border={"2px solid grey"}
                  color={'black'}
                  _hover={{
                    bg: 'white',
                  }}>
                 <img style={{width:"22px",paddingRight:"5px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTb6CEJg9INtyaf2J8APb69gsPOznqz7eQDw&usqp=CAU" alt="" />Continue with Facebook
                </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Text align={'center'} fontSize={'1xl'}>Don't have an account? <Button padding={"0px"} onClick={()=>{navigate("/signUp")}} bg={'heritance'}><Link to={"/login"} color={'blue.400'}>Sign up</Link></Button></Text>
        </Stack>
      </Flex>): <Navigate to={"/creatorhome"}></Navigate>
      
      }
      </>
    );
  }
