import React from "react";
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px", width: "90%" })};
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items: center;
`
const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  ${mobile({ display: "none" })};
`
const SearchContainer = styled.div`
  border:1px solid lightgray;
  display:flex;
  align-items: center;
  margin-left:25px;
  padding:5px;
  ${mobile({ marginLeft: "2px", marginRight: "3px" })};
`
const Input = styled.input`
  padding:4px;
  border:none;
  ${mobile({ width: "50px" })};
`
const Center = styled.div`
  flex:1;
  text-align:center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "22px" })};
`
const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "center", marginRight: "41px" })};
`
const MenuItem = styled.div`
  font-size: 14px;
  color:grey;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "4px" })};
  &:hover{
    color:green;
  }
`


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BRAND.</Logo>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: "inherit" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "inherit" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;