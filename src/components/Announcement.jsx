import React from "react";
import styled from 'styled-components';
import { mobile } from "../responsive";
const Container = styled.div`
  height: 25px;
  background-color: teal;
  color: white;
  text-align: center;
  font-size: 18px;
  display:flex;
  justify-content: center;
  ${mobile({ fontSize: "15px", display: "block", overflow: "hidden" })};
`
const Text = styled.div`
${mobile({ marginRight: "60px" })};
`


const Announcement = () => {
    return (
        <Container>
            <Text>
                Super Deal! Free Shipping on Ordersd over $50
            </Text>
        </Container>
    );
}

export default Announcement;