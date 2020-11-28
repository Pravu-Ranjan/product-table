import {

    GET_PRODUCT,
    SET_PRODUCT,
    GET_SINGLE_PRODUCT,
    SET_SINGLE_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    PRODUCT_SUCCESS,
    API_ERROR,
    DELETE_PRODUCT,
    PRODUCT_DELETE_SUCCESS
} from "./ActionTypes";

export const getProduct = (product) => ({
    type: GET_PRODUCT,
    payload: product
})

export const setProduct = (product, message, action) => ({
    type: SET_PRODUCT,
    payload: product,
    message: message,
    action_type: action
})

export const getProductById = (product, message, action) => ({
    type: GET_SINGLE_PRODUCT,
    payload: product,
    message: message,
    action_type: action
})

export const setSingleProduct = (product, message, action) => ({
        type: SET_SINGLE_PRODUCT,
        payload: product,
        message: message,
        action_type: action
    }
)

export const createProduct = (product) => ({
    type: CREATE_PRODUCT,
    payload: product
})

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product
})

export const deleteProduct = (product) => ({
    type: DELETE_PRODUCT,
    payload: product
})

export const productSuccess = (product, message, action) => ({
    type: PRODUCT_SUCCESS,
    payload: product,
    message: message,
    action_type: action
})

export const productDeleteSuccess = (product, message, action) => ({
    type: PRODUCT_DELETE_SUCCESS,
    payload: product,
    message: message,
    action_type: action
})

export const apiError = (error) => ({
    type: API_ERROR,
    payload: error,
  });
  