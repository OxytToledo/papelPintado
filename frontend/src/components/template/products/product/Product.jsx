import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import './Product.css'

const Product = ({ product, onAddToCart }) => {
    return (
        <Card className="root">
            <CardMedia className="media" image={product.media.source} title={product.name}></CardMedia>
            <CardContent className="cardContentOne">
                <div className="cardContent">
                    <Typography className="productName" variant="h5" gutterBottom>{product.name}</Typography>
                    <Typography className="productPrice" variant="h7" gutterBottom>{product.price.formatted_with_symbol}</Typography>
                </div>
                <div className="description"> <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2 " color="textSecondary"/> </div>
            </CardContent>
            <CardActions disableSpacing className="CardActions">
                <IconButton arial-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart></AddShoppingCart>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
