import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { commerce } from '../lib/commerce'
import { Header, NavBar, Catalog, Footer, HelpPage, Products } from '../components/template'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve()) 
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    console.log(cart)
    return (
        <div className="app">
            <Header></Header>
            <NavBar totalItems={cart.total_items}></NavBar>
            <Catalog></Catalog>
            <Footer></Footer>
            <HelpPage></HelpPage>
            <Products products={products} onAddToCart={handleAddToCart}></Products>
        </div>
    )
}

export default App
