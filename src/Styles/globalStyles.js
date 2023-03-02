import styled from "@emotion/styled";

export const Text = styled.div`
color:${props=>props.color??"#fff"};
font-size:${props=>props.fsize??"14px"};
font-family:Montserrat;
font-weight: ${props=>props.w??400};
line-height:22px;
`
export const Width = styled.div`
width: ${props=>props.width};
margin: auto;
`