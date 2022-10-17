import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {
   Link
  } from "react-router-dom";
  import {addProduct} from '../redux/cartRedux'
  import {useDispatch} from "react-redux"


const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
transition:250ms ease-in-out;

`


const Container = styled.div`
flex:1;
margin:5px;
min-width:300px;
height:350px;

display: flex;
align-items: center;
justify-content: space-around;
/* background-color:#D5fbfd; */
position:relative;
&:hover ${Info} {
    opacity:1;

}

`

const Circle = styled.div`
width:275px;
height:275px;
border-radius:50%;
background-color:#E5fbfd;
position:absolute;
`


const Image = styled.img`
height:80%;
max-height:80%;
z-index:2;
aspect-ratio:0.75;
box-shadow:
3px 3px 2px 1px rgba(0, 0, 0, 0.1),
3px 3px 3px 1.25px rgba(0, 0, 0, 0.125),
3px 3px 4px 1.5px rgba(0, 0, 0, 0.150),
3px 3px 5px 1.75px rgba(0, 0, 0, 0.175),
3px 3px 6px 2px rgba(0, 0, 0, 0.2),
3px 3px 16px 2.25px rgba(0, 0, 0, 0.425);
object-fit: cover;

border-radius:25px;


`

const Icon = styled.div`
width:40px;
height: 40px;
border-radius:50%;
background-color:white;
display: flex;
align-items: center;
justify-content: center;
margin:10px;
transition: all 0.5s ease;
cursor: pointer;

&:hover{
    background-color:#e9f5f5;
    transform: scale(1.1);


}

`


const Product = ({item}) => {
    const dispatch = useDispatch()
    const handleAddToCart = (item)=>{
        console.log(item,'from product item')
        dispatch(addProduct({...item}))

    }
  return (
    <Container>

        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon onClick={()=>handleAddToCart(item)} >
                <ShoppingCartOutlinedIcon />
            </Icon>

            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlinedIcon />
                </Link>
               
            </Icon>

            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
         
        </Info>


    </Container>
  )
}

export default Product