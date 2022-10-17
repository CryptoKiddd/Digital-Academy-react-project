
import { useState } from "react"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from  "react-redux"
import { LinearProgress } from "@mui/material";
import {useNavigate } from 'react-router-dom'


const Container = styled.div`
width: 100vw;
height: 100vh;
background-color:#f5fbfd;
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper = styled.div`
padding: 20px;
width:30%;
background-color: white;
display: flex;
flex-direction: column;
${mobile({width:'80%'})};


`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
flex-direction: column;



`

const Input = styled.input`
flex: 1;
min-width: 60%;
margin:20px 10px 0 0;
padding:10px;
`
const Button = styled.button`
border:none;
margin:15px 0px;
width:40%;
padding:10px 15px;
background-color:teal;
color:white;
cursor: pointer;
transition:all 250ms ease-out;
border:1px solid transparent;
font-weight: 500;
font-size: 16px;
&:hover{
    border:1px solid teal;
    background-color:white;
    color:green
};
&:disabled{
  color:green;
  cursor:not-allowed;
}
`
const Link = styled.a`
margin:5px 0px;
font-size: 12px;
cursor: pointer;
text-decoration: underline;


`
const ErrTag = styled.span`
color:Red;`

const Login = () => {
  const [userName, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const distpatch = useDispatch();
  const navigate = useNavigate()
  const {isFetching,error} = useSelector(state=>state.user)

  const handleLogin = e =>{
    e.preventDefault()
    login(distpatch,{userName,password});
    console.log('shemovida')
    navigate('/')
  }


  return (
    <Container>
      {isFetching? <LinearProgress />: 
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
          
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
     
                <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            
              
           
                <Button onClick={(e)=>handleLogin(e)} >LOGIN</Button>
               {error && <ErrTag>Something Went Wrong</ErrTag>}
                <Link>FORGOT PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
      }
    </Container>
  )
}

export default Login