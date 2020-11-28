import React, { Fragment, useEffect } from 'react'
import { connect } from "react-redux";
import { getProduct } from "../../ReduxStore/Actions"
import CreateProduct from '../Layouts/CreateProduct';
import ProductList from '../Layouts/ProductList';
function Product(props) {

    useEffect(() => {
        props.getProduct()
    },[])

     return (
        <Fragment>
            <CreateProduct />
           <ProductList />
        </Fragment>
    )
}

const mapStatetoProps = (state) => {
    const product = state.Product;
    return product;
}

export default 
    connect(mapStatetoProps, { getProduct })(Product);

