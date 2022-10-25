import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`
const Categories = () => {
  return (
    <Container>
      {
        categories.map(el=>(
            <CategoryItem item={el} key={el.id}/>
        ))
      }
    </Container>
  )
}

export default Categories
