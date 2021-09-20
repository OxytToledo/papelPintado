import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/Product'
import './Products.css'

const Products = ({ products, onAddToCart }) => {
    return (
        <main className="content">
            
            <Grid container className="grid" alignItems="center" justifyContent="center" spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id}>
                        <Product product={product} onAddToCart={onAddToCart}></Product>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
