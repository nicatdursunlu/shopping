import React from 'react';
import {Route} from 'react-router-dom';

import { Layout } from  '../../commons';
import { ProductsList, SingleProduct, ProductsViewSwitcher } from './components';

export const Homepage = () => {
    return(
        <Layout>
            <h1>Homepage</h1>
            <ProductsViewSwitcher/>
            <ProductsList/>
            <Route path="/products/:id" component={SingleProduct} />
        </Layout>
    )
}