import React, { useState, useEffect } from 'react'
import './App.css'

import { commerce } from '../lib/commerce'
import { Header, NavBar, Catalog, Footer, HelpPage, Products } from '../components/template'

const App = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)

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
