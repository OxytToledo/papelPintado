import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/Product'
import './Products.css'

const products = [
    {id: 1, name: 'papel tddal', discription: 'Papel tal', price: 12300, image: "../../assets/img/img1.jpg"},
    {id: 2, name: 'papel tddal', discription: 'Papeldd tal', price: 12300, image: "../../assets/img/img2"},
    {id: 3, name: 'papel tddal', discription: 'Papeldd tal', price: 12300, image: "../../assets/img/img2"},
    {id: 4, name: 'papel tddal', discription: 'Papeldd tal', price: 12300, image: "../../assets/img/img2"},
    {id: 5, name: 'papel tddal', discription: 'Papeldd tal', price: 12300, image: "../../assets/img/img2"}
]

const Products = () => {
    return (
        <main className="content">
            <Grid container className="grid" alignItems="center" justifyContent="center" spacing={2}>
                {products.map((product) => (
                    <Grid item key={product.id}>
                        <Product product={product}></Product>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
