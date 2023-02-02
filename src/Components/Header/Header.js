import styled from "styled-components";
import logo from "../Common/Images/logo.png";
import { BsSearch } from 'react-icons/bs';

export default function Header(){
    return(
        <Container>
            <Images  src={logo}/>
            <BsSearch/>
        </Container>
    )
}

const Container = styled.div`
@media (max-width: 767px) {
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-right:15px;
    top:0;
    left:0;
    width:100%;
    height:4rem;
    background-color: #141414;
    opacity:0.5;
    position:fixed;
    img{
        width:4rem;
        height:4rem;
        opacity:1 !important;
    }
}
`
const Images = styled.img`
@media (max-width: 767px) {
        width:5rem;
        height:5rem;
        opacity:1 !important;
}
`
