import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  width:100%;
  background-color:#F5fbfd;

  ${mobile({height:'50px'})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({height:'10px 0px'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:'none'})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft:'10px'})};
`;
const Input = styled.input`
  border: none;
  width:200px;
  padding:5px;
  font-size:14px;
  color:grey;
  background-color:#F5fbfd;
  ${mobile({width:'50px'})};
  &:focus{
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: aqua;
  ${mobile({fontSize:'20px'})};
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  
  ${mobile({justifyContent:'center',flex:2})};
  gap: 15px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({fontSize:'12px',marginLeft:'10px'})};
  
`;

const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector(state=>state.user.currentUser)
  console.log(user,'redux-store')
  console.log(quantity,'cart')
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <SearchIcon style={{color:'gray',fontSize:16}} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to='/'>
          <Logo>Market +</Logo>
          </Link>
        
        </Center>

        <Right>

       {user? <span> {user.userName} </span>:
        <>
       <Link to='register'>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to='login'>
          <MenuItem>Sign In</MenuItem>
          </Link>  
        </>
          
          }
          

          

          <MenuItem>
          <Link to='/cart'>
          <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
           

          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
