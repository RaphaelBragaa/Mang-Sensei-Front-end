import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
  import GlobalStyle from './GlobalStyle';
  import Cover from '../Cover/Cover';
  import List from '../List/List';
  import Header from '../Header/Header'


export default function App(){
    return(
        <>
        <GlobalStyle/>
        <Header/>
        <Cover/>
        <List/>
        <List/>
        </>
    )
}