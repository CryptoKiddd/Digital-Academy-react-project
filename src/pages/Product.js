import styled from "styled-components"

import NewsLetter from "../components/NewsLetter"
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive"
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";

import { LinearProgress } from "@mui/material";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Container =styled.div``


const Wrapper =styled.div`
padding:50px;
display: flex;
${mobile({flexDirection:'column',padding:'10px'})};

`


const InfoContainer =styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:'10px'})};

`
const ImageContainer =styled.div`
flex:1;
`
const Image =styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:'40vh'})};

`
const Title =styled.h1`
font-weight: 400;
font-size: 35px;

`

const Desc =styled.p`
margin:20px 0;
font-weight:200;

`
const Price =styled.span`
font-size:30px;
font-weight:100;


`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width:50%;
margin:30px 0px;
${mobile({width:'100%'})};


`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
margin:0 5px;
cursor: pointer;
background-color: ${props=>props.color};
`
const FilterSize = styled.select`
margin-left:10px;
padding:5px;

`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display:flex;
width:50%;
align-items:center;
justify-content:space-between;
${mobile({width:'100%'})};

`
const AmountContainer = styled.div`
display: flex;
align-items:center;

font-weight:bold;
`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display: flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`
const Button = styled.button`
border:1px solid grey;
padding:15px;
background-color:white;
font-weight: 600;
cursor:pointer;
transition:250ms ease;
&:hover{
    background-color:teal;
    color:white;
}



`
const spinnerStyle = {
    width:'100%',
    height:'100%',
    position:'absolute',
    top:'0',
    left:'0',
}






const Product = () => {
    const params = useParams()
    const id = params.id
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const dispatch = useDispatch()
    console.log(product)

   const handleQuantity = (operator) => {
      if (operator === 'add'){
        setQuantity(prev=>prev+1)

      }else{
        quantity >1 && setQuantity(prev=>prev-1)

      }
        

    }
    const hanldeAddToCart = ()=>{
        dispatch(addProduct({ ...product, quantity, color,size}))
        
    }
     
    useEffect(()=>{
        (async()=>{
            try {
                setIsLoading(true)
                const {data}  = await publicRequest.get("/products/find/" + id)
                setProduct(data)
                setIsLoading(false)
                
            } catch (error) {
                
            }
        })();

    },[id])
     
  return (
    <>
     {isLoading ? <LinearProgress style={spinnerStyle} />:<Container>

       
       
       

    <Wrapper>
        <ImageContainer>
            <Image src={product?.img} />
        </ImageContainer>
        <InfoContainer>
            <Title>{product?.title}</Title>
            <Desc>{product?.desc}</Desc>
            <Price>{product?.price} $</Price>
            <FilterContainer>
                <Filter>

                    <FilterTitle>Color</FilterTitle>
                    { product.color && product.color.map((color)=> <FilterColor key={color}  color={color}
                     onClick={()=>setColor(color)} />)
                    }


                   
                    

                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange={(e)=>setSize(e.target.value)} >
                    { product.size && product.size?.map((size)=> <FilterSizeOption k>{size}</FilterSizeOption>)
                    }
                        
                        
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveRoundedIcon onClick={()=>handleQuantity('minus')} ></RemoveRoundedIcon>
                    <Amount>{quantity}</Amount>
                    <AddIcon onClick={()=>handleQuantity('add')}></AddIcon>
                </AmountContainer>
                <Button onClick={hanldeAddToCart}> ADD TO CART </Button>
            </AddContainer>
        </InfoContainer>


    </Wrapper>

    <NewsLetter />

</Container> }
    </>
   
    
  )
}

export default Product