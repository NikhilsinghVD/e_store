import React from "react";
import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from "../responsive";
const Container = styled.div`
  background-color:#fcf5f5;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height:60vh;
  ${mobile({ height: "60vh", width: "100vw" })};
`
const Title = styled.h1`
  font-size:70px;
  ${mobile({ fontSize: "50px", marginRight: "20%", marginBottom: "10%" })};
`
const Desp = styled.div`
  margin:10px 0px;
  font-size:24px;
  font-weight:300;
  ${mobile({ display: "flex", textAlign: "center", width: "60%", marginRight: "20%", marginBottom: "10%" })};
`
const InputContainer = styled.div`
  width:50%;
  height:40px;
  background-color:white;
  display:flex;
  justify-content:space-between;
  border:1px solid lightgray;
  ${mobile({ marginRight: "45%" })};
`
const Input = styled.input`
  border:none;
  flex:8;
  font-size:18px;
`
const Button = styled.button`
  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:18px;
  border:1px solid lightgray;
  cursor:pointer;
  transition:all 0.5s ease;
  &:hover{
    background-color:teal;
    color:white;
  }
`

const Product = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desp>Get timely updates from your favrite products.</Desp>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />Send
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Product;