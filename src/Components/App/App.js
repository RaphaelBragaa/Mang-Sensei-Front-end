import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
  import GlobalStyle from './GlobalStyle';
  import Cover from '../Cover/Cover';


export default function App(){
    return(
        <>
        <GlobalStyle/>
        <Cover/>
        </>
    )
}