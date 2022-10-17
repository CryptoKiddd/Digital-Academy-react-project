import FacebookRoundedIcon  from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`
display: flex;
background-color:#f5fbfd;
${mobile({flexDirection:'column',})};


`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;

padding:30px;

`
const Logo = styled.h1`
font-size: 30px;
font-weight: bold;

`
const Desc = styled.p`
margin:20px 0;

`
const SocialContainer = styled.div`
display: flex;
gap:5px;

`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
gap:20px;

`



const Center = styled.div`
flex: 1;
padding:30px;
`
const Title = styled.h3`
margin-bottom:30px;
font-size: 25px;
font-weight:500;
`
const List = styled.ul`
display: flex;
flex-wrap:Wrap;


`
const ListItem = styled.li`

width:50%;
margin-bottom:10px;

`


const Right = styled.div`
flex: 1;
padding:30px;
`

const ContactItem  = styled.div`
margin-bottom:20px;
display: flex;
align-items: center;
`
const Payment  = styled.img`
width:50%;
`
const Footer = () => {
  return (

    <Container>

        <Left>
            <Logo>Market +</Logo>
            <Desc> Lorem ipsum dolor sit amet consectetur, adipisicing el
                it. Minima voluptates ea, itaque natus numquam doloru4
                m voluptatibus aliquam repellendus culpa fuga.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999' >
                    <FacebookRoundedIcon />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <WhatsAppIcon />
                </SocialIcon>
            </SocialContainer>


        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem>
              <FmdGoodIcon style={{marginRight:'10px'}} />   Batumi, Revaz Komakhidze 13/3
            </ContactItem>
            <ContactItem>
              <LocalPhoneRoundedIcon style={{marginRight:'10px'}}/>  +995 598 987 213
            </ContactItem>
            <ContactItem>
              <MailOutlineRoundedIcon style={{marginRight:'10px'}}/>  Contatcme@gmail.com
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>

        </Right>

    </Container>
  )
}

export default Footer