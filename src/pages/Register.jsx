import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5)),
      url("https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") top;
      display:flex;
      align-items:center;
      justify-content:center;
`
const Wrapper = styled.div`
   padding:20px;
   width:50%;
   background-color:white;
   display:flex;
   flex-direction:column;
   align-items:center;
`
const Title = styled.h1`
  font-size:24px;
  font-weight:300;
  margin-bottom:10px;
`
const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Input = styled.input`
  width:60%;
  margin:8px 0px;
  border:none;
  border-bottom: 1px solid gray;
  font-size:16px;
  padding:5px;
`
const Agreement = styled.span`
  font-size:12px;
  margin:20px 0px;
`
const Button = styled.button`
  padding:7px 12px;
  cursor:pointer;
  border:1px solid teal;
  &:hover{
      background-color: #f8f4f4;
  }
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type="text" placeholder="Enter Your FirstName" />
                    <Input type="text" placeholder="Enter Your LastName" />
                    <Input type="text" placeholder="Enter UserName" />
                    <Input type="email" placeholder="Enter Your Email" />
                    <Input type="password" placeholder="Enter password" />
                    <Input type="password" placeholder="Confirm password" />
                    <Agreement>By creating an account,I consent to the processing of my
                        personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;