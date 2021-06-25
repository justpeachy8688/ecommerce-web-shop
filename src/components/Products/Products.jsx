import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'French Macarons', description: 'Pink Macarons', price: '$15', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easy-french-macarons-vertical-1545085468.jpg' },
    { id: 2, name: 'Rainbow Cake', description: 'Rainbow Cake', price: '$60', image: 'https://sugargeekshow.com/wp-content/uploads/2020/03/rainbow-cake-featured-scaled.jpg' },
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;