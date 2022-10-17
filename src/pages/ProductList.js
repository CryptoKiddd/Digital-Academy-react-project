import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { LinearProgress } from "@mui/material";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  font-size: 35px;
  font-weight: bold;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0 20px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  })};
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  ${mobile({ margin: "10px 0px" })};
`;
const Option = styled.option``;

const ProductList = () => {
  
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const params = useParams();
  const cat = params.category;
  console.log(cat)

  const handleFilters =(e)=>{
    const {name,value} = e.target
    setFilters({...filters,[name]:value})

  }
 
 

  return (
    <Container>
     

      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter</FilterText>
          <Select name="color" onChange={(e)=>handleFilters(e)}>
            <Option >Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={(e)=>handleFilters(e)}>
            <Option >Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>Xl</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select onChange={e=>setSort(e.target.value)} >
            <Option value='newest' >Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc' >Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
   
    </Container>
  );
};

export default ProductList;
