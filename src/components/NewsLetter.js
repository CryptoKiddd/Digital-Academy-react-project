import SendRoundedIcon from '@mui/icons-material/SendRounded';
import styled from 'styled-components';
import { mobile } from '../responsive';
  const Container = styled.div`
  height:60vh;
  background-color:#fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:20px;
  `
  const Title = styled.h1`
  font-size: 70px;
  margin-bottom:30px;
  `
  const Description = styled.div`
  font-size:24px;
  font-weight:300;
  ${mobile({textAlign:'center'})};
  `
  const InputContainer = styled.div`
  width:50%;
  height:40px;
  background-color:white;
  display: flex;
  justify-content: space-between;
  border:1px solid lightGrey;
  ${mobile({width:'80%'})};
  
  `
  const Input = styled.input`
  border:none;
  flex:8;
  padding-left:20px;
  
  `
  const Button = styled.button`
  flex:1;
  border:none;
  background-color:teal;
  color:white;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover{
    transform: translateX(20px);
    scale: 1.1;

  }
  `
const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get timely updates from your favorite products</Description>
        <InputContainer>

        <Input placeholder='Your Emali' />
        <Button>
            <SendRoundedIcon/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter