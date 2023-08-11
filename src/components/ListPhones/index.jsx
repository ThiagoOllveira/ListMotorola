import React from "react";
import styled from 'styled-components';

const ItemContainer = styled.div`
  border-radius: 4px;
  background-color: #fff;
  height:120px;
  width:280px;
  color:#29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
`;

const Imagem = styled.img`
  width: auto;
  height: 100%;
  border: 0;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

const Price = styled.div`
  margin-bottom: 5px;
`;

const Button = styled.div`
  display: inline-block;
  margin-bottom: -60px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #1414d2;
  border-color: #6d6dec;
  border-radius: 4px;

`;

const ItemLink = styled.a`
  text-decoration: none;
`
                
export default function ListPhones({phone}) {
  return (
    <>
        <ItemContainer>
            <Imagem src={phone.img} />
            <Title>{phone.title}</Title>
            <Price>{phone.price}</Price>
      <ItemLink href={phone.url} target="_blank">
            <Button>Comprar</Button>
      </ItemLink>
        </ItemContainer>
    </>
  )
}

