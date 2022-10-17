import styled from "styled-components";

import { sliderItems } from "../data";

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import { mobile } from "../responsive";


const Container = styled.div`
width: 100%;
height:90vh;
display:flex;
overflow: hidden;
${mobile({display:'none'})};
position:relative;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:lightgrey;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${ (props) => props.direction ==='left' && "10px"};
right:${ (props) => props.direction ==='right' && "10px"};
margin:auto;
opacity:0.5;
z-index: 1;
cursor: pointer;
&:hover{
    background-color:tomato;
}

`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.sliderIndex * -100}vw);
transition:all 1.5s ease;
`
const Slide = styled.div`
width:100vw;
height:100%;
display: flex;
align-items: center;
background-color:#${props=>props.bg};
`;

const ImgContainer = styled.div`
flex:1;
height: 100%;

`;

const Image = styled.img`
width:100%;
height:100%;
object-fit: contain;

`


const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;
const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size:20px;
font-weight:500;
letter-spacing:2px;

`
const Button = styled.button`
padding:10px 13px;
font-size:20px;
background-color:transparent;
cursor:pointer;
transition: 333ms ease;
&:hover{
    background-color:black;
    border:2px solid white;
    color:white;
 
}
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
       
        if(direction==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }

    }
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>

            <ArrowLeftIcon  />

        </Arrow>
        <Wrapper sliderIndex={slideIndex} >
            {sliderItems.map(item=>{
            return(
            <Slide key={item.id} bg={item.bg} >
            <ImgContainer>
            <Image src={item.img}/>
            
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
                )})}



        
        </Wrapper>
        <Arrow direction = 'right' onClick={()=>handleClick('right')}>

            <ArrowRightIcon  />

        </Arrow>

    </Container>
  )
}

export default Slider