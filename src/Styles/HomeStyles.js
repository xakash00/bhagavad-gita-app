
import styled from "@emotion/styled";


export const Card = styled.div`
width:100%;
padding:2em;
border-radius: 15px;
background-color:#ffa000;
border:1px solid #f77223;
box-shadow: 0px 0px 7px #ccc;
transition: transform 0.3s ease-in-out;
margin-bottom:2rem;
&:hover{
    transform: scale(1.06);
}
` 

export const Margin = styled.div`
height: 10px;
`

export const RippleCard = styled.div`
overflow: hidden;
width: 100%;
padding:1em 1em 1em 2em;
position: relative;
cursor: pointer;
margin-bottom:2em;
background: #ffa000;
color: #fff;
font-size: 20px;
border-radius: 10px;
border: 1px solid #fff;
text-align: center;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;