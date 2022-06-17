import React, { useContext } from 'react';
import { Box, Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import { AuthContext } from "../context/AuthContext"

const Navbar = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    let [email, setEmail] = React.useState("")
    let [password, setPassword] = React.useState("")
    

    let { isAuth, toggleAuth } = useContext(AuthContext);

    const [res, setRes] = React.useState("");

    const handleRequest = () =>{
        let payload = {email,password}

        fetch(`https://reqres.in/api/login`,{
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) =>{
            if(res){
                toggleAuth()
                console.log(res)
                setRes(res.token);
            }
        })
    }
console.log({email,password})
    
    return <>
     <Box w="100%" h="150px" bg="black" >

        <Input placeholder='User Name' value={email}
        onChange={(e) => (setEmail(e.target.value))}
        />

        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e) =>(setPassword(e.target.value))}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>

        <Button colorScheme='blue' onClick={handleRequest} >
            {isAuth? "Logout" : "Login"}
        </Button>
    </Box>
    {
        isAuth ? <Box bg="pink" c="white"> You are loged in :  {res} </Box> : <Box>Please Enter Login Details</Box>    }
    </>

}
export { Navbar };