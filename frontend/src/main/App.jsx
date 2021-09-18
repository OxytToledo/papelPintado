import React from 'react'
import './App.css'

import Header from '../components/template/Header'
import NavBar from '../components/template/NavBar'
import Catalog from '../components/template/Catalog'
import Footer from '../components/template/Footer'
import HelpPage from '../components/template/Help'
import Products from '../components/template/products/Products'
const App = () => {
    return (
        <div className="app">
            <Header></Header>
            <NavBar></NavBar>
            <Catalog></Catalog>
            <Footer></Footer>
            <HelpPage></HelpPage>
            <Products></Products>
        </div>
    )
}

export default App
