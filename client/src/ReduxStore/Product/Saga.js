import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import {
    GET_PRODUCT,
} from './ActionTypes'

import {
    setProduct,
    apiError
} from './Actions'

import {
    ajaxGetCall,
} from "../../Helper/AjaxCall";

function* getProductData({payload: { product } }) {
    try {
        const products = product;
        
        const response = yield call(
            ajaxGetCall,
            process.env.REACT_APP_API_PATH
        );

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

export function* watchGetProductData() {
    yield takeEvery(GET_PRODUCT, getProductData)
}

function* productSaga() {
    yield all([
        fork(watchGetProductData)
    ])
}

export default productSaga;