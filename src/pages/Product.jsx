import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Remove, Add } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div`
  
`;
const Wrraper = styled.div`
  display:flex;
  padding:50px;
`;
const ImgContainer = styled.div`
  flex:1;
  display:flex;
  overflow:hidden;
  margin-right:20px;
`;
const Image = styled.img`
  width: 100%;
  object-fit:cover;
`;
const InfoContainer = styled.div`
  flex:1;
  margin-left:15px;
`;
const Title = styled.h1`
  font-weight:200;
`;
const Desp = styled.p`
  margin: 20px 0px;
`;
const Price = styled.h3`
  font-weight:100;
  font-size:40px;
`;
const FilterContainer = styled.div`
  display:flex;
  width:60%;
  margin:30px 0px;
  justify-content:space-between;
`;
const Filter = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;
const FilterTitle = styled.span`
  font-size:20px;
  font-weight:200;
`;
const FilterColor = styled.div`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props => props.color};
  margin:0px 5px;
  padding:2px;
  cursor:pointer;
`;
const FilterSize = styled.select`
  margin-left:10px;
  padding:5px;

`;
const FilterSizeOption = styled.option`
  
`;
const AddContainer = styled.div`
  display:flex;
  align-items:center;
  width:50%;
  justify-content:space-between;

`;
const AmountContainer = styled.div`
  display:flex;
  align-items:center;
  font-weight:700;
`;
const Amount = styled.span`
  width:30px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding:15px;
  border:2px solid teal;
  background-color: white;
  cursor:pointer;
  font-weight:500;
  &:hover{
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data);
      } catch {

      }
    };
    getProduct();
  }, [id]);

  const handlequantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrraper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desp>{product.desc}</Desp>
          <Price>&#8377;{product.price}/-</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map(c => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map(s => (
                  <FilterSizeOption key={s}>{s} </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handlequantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handlequantity("inc")} />
            </AmountContainer>
            <Button onClick={addCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrraper>
      <Newsletter />
      <Footer />
    </Container >
  );
}

export default Product;