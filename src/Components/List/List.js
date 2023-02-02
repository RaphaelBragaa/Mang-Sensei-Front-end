import styled from "styled-components"
import a from "../Common/Images/1.jpg"
import b from "../Common/Images/2.jpg"
import c from "../Common/Images/3.jpeg"
import d from "../Common/Images/4.jpeg"
import e from "../Common/Images/5.jpg"

export default function List(){
    const lists = [a,b,c,d,e]
    return(
        <Container>
        <h1>Destaques</h1>
        <div>
        {lists.map((list)=>{return(<img src={list}/>)})}
        </div>
        </Container>
    )
}

const Container = styled.div`
    @media (max-width: 767px) {
        display:flex;
        flex-direction:column;
        width:100%;
        height: 50%;
        padding-left:1rem;
        h1{
            font-size:1.3rem;
            margin-bottom:1rem;
        }
        div{
            display:flex;
            justify-content:space-between;
            margin-bottom:20px;
            
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            white-space: nowrap;

           img{
            width:10rem;
            height:10rem;
            border-radius:8px;
            margin-right:10px;
        } 
        }
        
    }
`