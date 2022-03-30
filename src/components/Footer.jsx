import React from "react";
import styled from 'styled-components';
import {
  Facebook, Twitter,
  Instagram, Pinterest,
  WhatsApp, Room, Phone, MailRounded
} from '@material-ui/icons';
import { mobile } from "../responsive";
const Container = styled.div`
  display:flex;
  ${mobile({ flexDirection: "column" })};
`
const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  padding:20px;
`
const Logo = styled.h1`
  
`
const Desc = styled.p`
  margin:20px 0px;
  color:gray;
  text-align: left;
  font-weight: 400;
`
const SocialContainer = styled.div`
  display:flex;
`
const SocialIcon = styled.div`
  width:40px;
  height:40px;
  color:${props => props.color};
  border-radius: 50%;
  background-color: white;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Center = styled.div`
flex:1;
padding:20px;
${mobile({ display: "none" })};
`
const Title = styled.h3`
  margin-bottom:30px;
`
const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
`
const ListItem = styled.li`
  width:50%;
  margin-bottom:8px;
`
const Right = styled.div`
  flex:1;
  padding:20px;
  display:flex;
  flex-direction:column;
`
const contactItem = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`
const Payment = styled.img`
  width:80%;
  height:40%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BRAND.</Logo>
        <Desc>Explore The Best Of Indian Wear &
          Fusion Wear. Styles By Our People, Made For Us.
          Redefine Your Style Statement With Trendy Apparel, Footwear, Accessories & More.
          100% Original Brands. Studio.
          COD available. 10+ lakh styles. Size Finder. 3000+ Brands.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#4267B2">
            <Facebook style={{ fontSize: "30px" }} />
          </SocialIcon>
          <SocialIcon color="#1DA1F2">
            <Twitter style={{ fontSize: "30px" }} />
          </SocialIcon>
          <SocialIcon color="#8a3ab9" >
            <Instagram style={{ fontSize: "30px" }} />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest style={{ fontSize: "30px" }} />
          </SocialIcon>
          <SocialIcon color="#25D366" >
            <WhatsApp style={{ fontSize: "30px" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Handloom Products</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <contactItem>
          <Room style={{ color: "red" }} />622 MIDC, Bangalore – 560068, Karnataka, India.
        </contactItem>
        <contactItem>
          <Phone style={{ color: "rgb(31, 81, 190)" }} />+91 67834576899
        </contactItem>
        <contactItem>
          <MailRounded style={{ color: "goldenrod" }} />contact@brand.com
        </contactItem>
        <Payment src="https://www.bellaboutique.com.au/assets/images/Screenshot%202019-11-12%2013_06_13.png" alt="img" />
      </Right>
    </Container>
  );
}

export default Footer;