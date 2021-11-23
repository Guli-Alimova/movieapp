import React from 'react'
import Genreslist from '../components/Genreslist';
import styled from 'styled-components';
import Moviegrid from '../components/Moviegrid';
import {useParams} from 'react-router-dom'


const CatalogSection = styled.section`
  padding:30px;
 
    
`
const CatalogMain= styled.div`
   display:flex;

`
const CatalogAside= styled.div`
    width:20%;
    @media (max-width: 991px) {
       width:40%;
    }
    @media (max-width: 565px) {
        width:50%;
     }
`
const CatalogMenu = styled.div`
    width:80%;
   
`
const Catalog = () => {
    const {genreid} = useParams();
    return (
        <div>
            <CatalogSection>
                <div className="container">
                    <CatalogMain>
                        <CatalogAside>
                            <Genreslist/>
                        </CatalogAside>
                        
                        <CatalogMenu>
                            <Moviegrid genre={genreid}/>
                        </CatalogMenu>

                     </CatalogMain>
         
                </div>
           </CatalogSection>
        </div>
    )
}

export default Catalog;
