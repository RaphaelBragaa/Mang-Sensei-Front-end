import styled from "styled-components";
import test from "../Common/Images/test1.png"
import test2 from "../Common/Images/test2.png"
import logo from "../Common/Images/superman.png"
import { GoPlus, GoInfo }  from 'react-icons/go';
import { MdMenuBook }  from 'react-icons/md';
export default function Cover(){

    return(
        <Container>
            <Advice image={test2}>
                <img className="Cover" src={test}/> 
                <img className="Logo" src={logo}/>
            </Advice>
            <Options>
                <div className="Option">
                <GoPlus fontSize={'2.5rem'} color={'white'}/>
                <h1>Minha Lista</h1>
                </div>
                <button>
                    <MdMenuBook fontSize={'2rem'}/>
                   <p>LER</p>
                </button>
                <div className="Option">
                <GoInfo fontSize={'2.5rem'} color={'white'}/>
                <h1>Saiba mais</h1>
                </div>
            </Options>
        </Container>
    )
}

const Container = styled.div`
@media (max-width: 767px) {
    display:flex;
    flex-direction:column;
 }
`

const Advice = styled.div`
@media (max-width: 767px) {
    display:flex;
    flex-direction:column;

    

    .Cover{
        width:100%;
        height:40%;
    }
    .Logo{
        width:60%;
        height:30%;
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -30%)
    }
 }
`

const Options=styled.div`
@media (max-width: 767px) {
    display: flex;
    justify-content:space-between;
    margin-top:40px;
    width:100%;
    height: 5rem;
    .Option{
        
        width:25%;
        align-items:center;
        text-align:center;
        
        h1{
            font-weight:200;
            font-size:0.8rem;
            color:white;
        }
    }
    button{
        display:flex;
        width:30%;
        height:55%;
        align-items:center;
        border-radius:10px;
        border:none;
    
        p{
            margin-left:20px;
            font-weight:800;
            font-size:1rem;
        }
    }
}
`
