import React, { useEffect, useState } from "react";
import styled from 'styled-components';
//import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios";
const Container = styled.div`
  padding:20px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ProductsHeading = styled.h1`
font-size:30px;
`

const Products = ({ cat, Filters, Sort }) => {
    const [products, setProducts] = useState([]);
    const [Filteredproducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) {

            }
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(Filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        );
    }, [products, cat, Filters]);

    useEffect(() => {
        if (Sort === "newest") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (Sort === "asc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [Sort])

    return (
        <>
            <ProductsHeading>Hot Sale Products</ProductsHeading>
            <Container>
                {cat ? Filteredproducts.map((item) => (
                    <Product item={item} key={item.id} />
                )) : products.slice(0, 8).map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </>
    );
}

export default Products;