import React from 'react'
import Genreslist from '../components/Genreslist';
import styled from 'styled-components';
import Moviegrid from '../components/Moviegrid';
import {useParams} from 'react-router-dom'


const Catalog_section = styled.section`
  padding:30px;
 
    
`
const Catalog_main= styled.div`
   display:flex;

`
const Catalog_aside= styled.div`
    width:20%;
 
   
`
const Catalog_menu = styled.div`
    width:80%;
   
`
const Catalog = () => {
    const {genreid} = useParams();
    return (
        <div>
            <Catalog_section>
                <div className="container">
                    <Catalog_main>
                        <Catalog_aside>
                            <Genreslist/>
                        </Catalog_aside>
                        
                        <Catalog_menu>
                            <Moviegrid genre={genreid}/>
                        </Catalog_menu>

                     </Catalog_main>
         
                </div>
           </Catalog_section>
        </div>
    )
}

export default Catalog;
