import { takeEvery, fork, put, all, call, } from "redux-saga/effects";

import {
    GET_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './ActionTypes'

import {
    setProduct,
    productSuccess,
    apiError,
    productDeleteSuccess
} from './Actions'

import {
    ajaxGetCall,ajaxPostCall,ajaxDeleteCall
} from "../../Helper/AjaxCall";

function* getProductData() {
    try {
        
        const response = yield call(
            ajaxGetCall,
            process.env.REACT_APP_API_PATH
        );
        console.log(response)

        if(response) {
            yield put(
                setProduct(response, "Product Data fetched successfully!!!", "")
            );
        } else {
            yield put(apiError(response.message));
        }
    } catch (error) {
        yield put(apiError(error));
      }
}

function* createProductData({payload: product}) {
    try {
        const product_data = product;

        const response = yield call(
            ajaxPostCall,
            process.env.REACT_APP_API_PATH,
            product_data
        );

        console.log(response)
        if(response) {
            yield put(
                productSuccess(response, "Data Created Successfully.", 1)
                );
        } else {
            yield put(apiError(response.message));
        } 
    } catch (error) {
        yield put(apiError(error));
      }
}

function* deleteProductData({payload: product}) {
    try {
        const product_id = product;
        const response = yield call(
            ajaxDeleteCall,
            process.env.REACT_APP_API_PATH +"/"+
            product_id
        );

        if(response) {
            yield put(
                productDeleteSuccess(response.data, "Data Deleted Successfully.", 3)
                );
        } else {
            yield put(apiError("Cant Delete item"));
        } 
    }catch (error) {
        yield put(apiError(error))
    }
}

export function* watchGetProductData() {
    yield takeEvery(GET_PRODUCT, getProductData)
}

export function* watchCreateProductData() {
    yield takeEvery(CREATE_PRODUCT, createProductData)
}

export function* watchDeleteProductData() {
    yield takeEvery(DELETE_PRODUCT, deleteProductData)
}

function* productSaga() {
    yield all([
        fork(watchGetProductData),
        fork(watchCreateProductData),
        fork(watchDeleteProductData)
    ])
}

export default productSaga;