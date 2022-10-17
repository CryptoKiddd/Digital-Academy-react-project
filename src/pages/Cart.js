import styled from "styled-components"



import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { removeProduct , clearCart,setProductQuantity, addProduct } from "../redux/cartRedux";
import {useDispatch,useSelector} from "react-redux"
import {useState} from "react"

const Container = styled.div``

const Wrapper = styled.div`
padding:20px;
${mobile({padding:'10px'})};

`


const Title = styled.h1`
font-weight: 300;
text-align: center;

`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const TopButton = styled.button`
padding: 10px;
cursor: pointer;
font-weight: 300;
border:${props=>props.type === 'filled' && 'none'};
background-color:${props=>props.type === 'filled' ? 'black': "transparent"};
color:${props=>props.type === 'filled' && 'white'};
transition: 250ms ease;
&:hover{
    scale:1.1
}
`
const TopTexts = styled.div`
${mobile({display:'none'})};`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin:0 10px;


`


const Bottom = styled.div`
display: flex;
justify-content: space-between;
padding:20px;
${mobile({flexDirection:'column'})};
`
const Info = styled.div`
flex: 3;

`
const Summary = styled.div`
flex: 1;
border:0.5px solid lightgrey;
border-radius:10px;
padding: 10px;
height:50vh;

`
const Product = styled.div`
display: flex;
justify-content:space-between;
margin:5px;
position:relative;
${mobile({flexDirection:'column',alignItems:'center'})};

`
const ProductDetail = styled.div`
display: flex;
flex:2;
`
const Image = styled.img`
width:200px;

`
const Details = styled.div`
padding:20px;
display: flex;
flex-direction:column;
justify-content:space-around;
gap: 10px;

`
const ProductName = styled.span`
font-size: 18px;

`
const ProductId= styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};

`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 8px;


`
const ProductAmount = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductPrice = styled.div`
font-size:25px;
font-weight: 200
${mobile({marginBottom:'20px'})};


`
const Amount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin:'5px 15px'})};
`
const SummaryTitle = styled.h1`
font-weight: 200;
font-size: 25px;
`
const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content:space-between;
font-weight: ${props=>props.type === 'total' &&'500'};
font-size: ${props=>props.type === 'total' &&'24px'};


`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight: 600;


`
const RemoveBtn = styled.div`
position:absolute;
top:20px;
right:20px;
color: tomato;
`

const Cart = () => {
    const cart  = useSelector(state =>state.cart)
    const cartProducts  = useSelector(state =>state.cart.products)
    const [quantity, setQuantity] = useState(1)
  

    const dispatch = useDispatch()

    const handleRemove = (product)=>{
        
        dispatch(removeProduct({...product}))
        
    }
    const ClearTheCart = ()=>{
        dispatch(clearCart())
    }
    const handleProductQuantity = (product)=>{
       product.quantity = +2

    }
  return (
    <Container>

       
        
        <Wrapper>

            <Title></Title>
            <Top>

                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Cart ( {cart.quantity} )</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton onClick={()=>ClearTheCart()} type='filled'>Clear Cart</TopButton>

            </Top>
            <Bottom>

                <Info>

                   {cartProducts.length > 0 && cartProducts.map( product =>{  
                    const id = product._id
                    return(   
                        

                       <>
                    <Product key={id} >
                        
                        <RemoveBtn onClick={   () => handleRemove(product )} >X</RemoveBtn>
                        
                        <ProductDetail>
                           <Link to={`/product/${product._id}`}>
                            <Image src={product.img} />
                            </Link>
                            <Details>
                                <ProductName> {product.title}</ProductName>
                                <ProductId> <b>ID:</b> {product._id} </ProductId>
                                <ProductColor color={product.color} />
                                <ProductSize> <b>Size</b>{product.size}</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmount>
                            
                                <Amount> Quantity : {product.quantity ||1}</Amount>
                                
                                
                            </ProductAmount>
                            <ProductPrice > Price : {product.price} $</ProductPrice>
                        </PriceDetail>

                    </Product>
                    </> 
                   )   } )}

                    <hr />
                   


                </Info>


                <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                
                <SummaryItem>
                    <SummaryItemText>Est Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>- $ 5.9</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type='total'>
                    <SummaryItemText  >Total</SummaryItemText>
                    <SummaryItemText> $ {cart.total}</SummaryItemText>
                </SummaryItem>
                
                <Button>Checkout Now</Button>
                </Summary>


            </Bottom>


        </Wrapper>

        

      


    </Container>
  )
}

export default Cart