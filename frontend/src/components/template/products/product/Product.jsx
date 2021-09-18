import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import './Product.css'

import img from '../../../assets/img/img1.jpg'

const Product = ({ product }) => {

    return (
        <Card className="root">
            <CardMedia className="media" image={img} title={product.name}></CardMedia>
            <CardContent>
                <div className="cardContent">
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2 " color="textSecondary">{product.discription}</Typography>
            </CardContent>
            <CardActions disableSpacing className="CardActions">
                <IconButton arial-label="Add to cart">
                    <AddShoppingCart></AddShoppingCart>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
