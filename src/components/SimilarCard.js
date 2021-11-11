import React from 'react'
import styled from 'styled-components';
import { Progress } from 'antd';


const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const SimiCard = styled.div`

`
const Simi_img = styled.img`
width:200px;
height:300px;
border-radius:15px;
`
const SimiTitle =  styled.span`

font-size:14px;
color:#222;
text-transform:uppercase;
margin:20px 0;  
height:75px;

`
const SimiAvarage =  styled.div`
display: block;
position: absolute;
top:267px;
left:132px;
border:1px solid ;
padding:3px;
margin:10px ;
border-radius:50%;
background-color: #081C22;
    
`

const SimilarCard = ({similarobj}) => {
    return (
        <SimiCard>
            <div className="similar" key={similarobj.id}>
             <Simi_img src={IMAGE_URL + similarobj.poster_path} alt={similarobj.title} />
            </div>
            <div className="similar-text">
            <SimiTitle>{similarobj.title ? similarobj.title : similarobj.name}
            </SimiTitle>
            <SimiAvarage>  <Progress width="35px"  type="circle" strokeColor={{ '0%': '#108ee9', '100%': '#87d068'}} percent={similarobj.vote_average * 10}/>  </SimiAvarage>
            </div>
        </SimiCard>
      
    )
}

export default SimilarCard
