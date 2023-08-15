import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import ListPhones from './components/ListPhones'
import api from './Service/api'

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
  padding: 10px;
`;

function ListaBooks(params) {

    const[phones, setPhones] = useState([]);

  useEffect(() => {
    const url = '/Phone'
    api.get(url)
    .then((response)=> {
      console.log(response)
      setPhones(response.data)
    
    })
  },[])

    return(
        <>
    <Container>
      <h1>Motorola Linha G</h1>
      <ListContainer>
      {
            phones.map(phone => {
              return ( <ListPhones 
                key={phone.id} 
                phone={phone}
                  /> )
            })
          }
          
        </ListContainer>

    </Container>

    
    </>
    )
}

export default ListaBooks