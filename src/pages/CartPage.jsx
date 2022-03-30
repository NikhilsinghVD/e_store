import React from "react";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Remove, Add } from '@material-ui/icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div`
  
`;
const Wrapper = styled.div`
  padding:20px;
`;
const Title = styled.h1`
  font-weight:300;
  text-align:center;
`;
const Top = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px;
`;
const TopButton = styled.button`
  padding:10px;
  font-weight:600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer; 
  margin:0px 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content: space-between;
`;
const Info = styled.div`
  flex:3;
`;
const Product = styled.div`
  display:flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex:2;
  display:flex;
`;
const Image = styled.img`
  width:200px;
`;
const Details = styled.div`
display:flex;
justify-content: space-around;
flex-direction:column;
padding:20px;
`;
const ProductName = styled.span`
  
`;
const ProductId = styled.span`
  
`;
const ProductColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props => props.color};
`;
const ProductSize = styled.span`
  
`;
const PriceDetails = styled.div`
flex:1;
display:flex;
flex-direction:column;
 align-items: center;
 justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display:flex;
  align-items: center;
`
const Amount = styled.div`
  font-size:24px;
  margin:15px 5px;
`
const Productprice = styled.div`
  font-size:30px;
  font-weight:200;
`
const Hr = styled.hr`
  background-color:#eee;
  border:none;
  height:1px;
`;
const Summary = styled.div`
  flex:1;
  border:0.5px solid lightgray;
  border-radius:10px;
  padding:20px;
  height:50vh;
`;
const SummaryTitle = styled.h1`
  font-weight:200;
`;
const Summeryitem = styled.div`
  margin: 20px 0px;
  display:flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" ? 700 : 500};
`;
const SummryitemText = styled.span`
  
`;
const SummryitemPrice = styled.span`
  
`;
const Button = styled.button`
width: 100%;
padding:10px;
background-color: #1e1e1e;
color:white;
font-weight:600;
font-size:17px;
`;



const CartPage = () => {
  const cart = useSelector(state => state.cart)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your WishList (2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product.img} alt="img" />
                  <Details>
                    <ProductName><b>Product:</b>{product.title}</ProductName>
                    <ProductId><b>Product Id:</b>{product._id}</ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <Amount>{product.quantity}</Amount>
                    <Remove />
                  </ProductAmountContainer>
                  <Productprice>{product.price * product.quantity}</Productprice>
                </PriceDetails>
              </Product>

            ))}<Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMERY</SummaryTitle>
            <Summeryitem>
              <SummryitemText>Subtotal</SummryitemText>
              <SummryitemPrice>&#8377;{cart.total}</SummryitemPrice>
            </Summeryitem>
            <Summeryitem>
              <SummryitemText>Estimated Shipping</SummryitemText>
              <SummryitemPrice>&#8377; 40.90</SummryitemPrice>
            </Summeryitem>
            <Summeryitem>
              <SummryitemText>Shipping Discount</SummryitemText>
              <SummryitemPrice>&#8377; -40.90</SummryitemPrice>
            </Summeryitem>
            <Summeryitem type="total">
              <SummryitemText>Total</SummryitemText>
              <SummryitemPrice>&#8377;{cart.total}</SummryitemPrice>
            </Summeryitem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default CartPage;