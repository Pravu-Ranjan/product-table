import {

    GET_PRODUCT,
    SET_PRODUCT,
    API_ERROR,
} from "./ActionTypes";

export const getProduct = (product) => ({
    type: GET_PRODUCT,
    payload: {product}
})

export const setProduct = (product, message, action) => ({
    type: SET_PRODUCT,
    payload: product,
    message: message,
    action_type: action
})

export const apiError = (error) => ({
    type: API_ERROR,
    payload: error,
  });
  