import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.h1`
  width: 95%;
  font-size: 55px;
  font-weight: 800;
  text-align: center;
  margin: 0 auto;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  letter-spacing: 1px;
  font-style: italic;
  background-color: teal;
  padding: 20px;
  color: white;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async ( ) => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3001/api/products?category=${cat}`
            : `http://localhost:3001/api/products`
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect( () => {
    if ((sort === "Newest")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) =>a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price )
      );
    } else{
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) =>b.price - a.price )
      );
    }
  },[sort])

  return (
    <>
      <Header>Products</Header>

      <Container>
        {cat ? 


        filteredProducts.map((item) => <Product item={item} key={item._id} />):
        products.slice(0,8).map((item) => <Product item={item} key={item._id} />
      


        )}
      </Container>
    </>
  );
};

export default Products;
