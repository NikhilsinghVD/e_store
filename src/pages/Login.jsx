import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5)),
      url("https://images.pexels.com/photos/11193698/pexels-photo-11193698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500") top;
      background-fit:cover;
      display:flex;
      align-items:center;
      justify-content:center;
`
const Wrapper = styled.div`
   padding:20px;
   width:30%;
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
  width:100%;
  margin:8px 0px;
  border:none;
  border-bottom: 1px solid teal;
  font-size:16px;
  padding:5px;
`
const Button = styled.button`
  padding:7px 12px;
  margin:15px 10px;
  cursor:pointer;
  border:1px solid teal;
  &:hover{
      background-color: #f8f4f4;
  }
`
const Link = styled.a`
  text-transform: capitalize;
  cursor:pointer;
  &:hover{
      color:green;
      text-decoration: underline;
  }
`

const Error = styled.span`
  color:red
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user)
  const handlelogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="text" placeholder="Enter UserName"
            onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handlelogin} >LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>do not you remember the password?</Link>
          <Link>create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;