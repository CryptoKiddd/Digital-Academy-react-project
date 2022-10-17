
import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsive'
import CategoryItem from './CategoryItem'
const Container = styled.div`
height:100vh;
display:flex;
padding:20px;
justify-content: space-between;

${mobile({padding:'0px',flexDirection:'column'})};

`


const Header = styled.h1`
width:95%;
font-size:55px;
font-weight:800;
text-align: center;
margin:0 auto;
margin-top:70px;


margin-bottom: 0px;
font-style: italic;
background-color:teal;
padding:25px;
color:white;
border-top-left-radius:100%;
border-top-right-radius:100%;
border-bottom-left-radius:20%;
border-bottom-right-radius:20%;
letter-spacing:1px;
${mobile({display:'none'})};

`
const Categories = () => {
  return (

    <> 
    <Header>Categories</Header>
     <Container>
        {categories.map(item=> <CategoryItem item={item} key={item.id} /> )}


    </Container>
    </>
   
  )
}

export default Categories