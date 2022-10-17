import axios from "axios"
import styled from "styled-components"
import { mobile } from "../responsive"
import {useState} from 'react'
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login }from "../redux/apiCalls"

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
width:40%;
background-color: white;
${mobile({width:'80%'})};



`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-wrap: wrap;


`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin:20px 10px 0 0;
padding:10px;
`
const Agreement = styled.span`
font-size: 12px;
margin:20px 0px;
font-weight: 100;
letter-spacing: 1px;
`
const Button = styled.button`
border:none;
width:40%;
padding:15px 20px;
background-color:teal;
color:white;
cursor: pointer;
`


const Register = () => {
const navigate = useNavigate()  
const [loading, isLoading] =useState(false)
const [success, setSuccess] = useState(false)
const dispatch = useDispatch()
const [user,setUser] = useState({
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  confirmPass:''
})
console.log(user)
const handleUserInputs =(e)=>{

  const {value, name} = e.target
  setUser( prev=> ({...prev, [name]:value })  )
}

const userToLogin = {
  username:user.username,
  password:user.password
}


const handleSubmitUser = async (e) =>{
  e.preventDefault();
  try {
     isLoading(true)
    const res = await axios.post('http://localhost:3001/api/auth/register', user)
    isLoading(false)
    setSuccess(true)
    dispatch( login(res.data) )

    navigate('/')

  } catch (error) {
    console.log(error)

    
  }

  

}


  return (
    
    <Container>
     {loading && <LinearProgress />}
      {success? <h1>Successfull Registration</h1>:
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input onChange={handleUserInputs}  name='firstname' placeholder="Name"  />
                <Input onChange={handleUserInputs}   name='lastname' placeholder="Lastname" />
                <Input onChange={handleUserInputs} name='username' placeholder="Username" />
                <Input onChange={handleUserInputs} name='email' placeholder="Email" />
                <Input onChange={handleUserInputs} name='password' placeholder="Password" type='password' />
                <Input onChange={handleUserInputs} name='cofirmPass' placeholder="Confirm Password" />
              
                <Agreement>By creating an account, i consent to the proccesing my
                    peronaldarain accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={(e)=>handleSubmitUser(e)}>Create</Button>
            </Form>
        </Wrapper>}

    </Container>
  )
}

export default Register