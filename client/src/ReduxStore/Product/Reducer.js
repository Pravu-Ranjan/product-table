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
  PRODUCT_DELETE_SUCCESS,
} from "./ActionTypes";

const initialState = {
  product: [],
  message: null,
  action_type: null,
};

const product = (state = initialState, action) => {

  let stateCopy = JSON.parse(JSON.stringify(state));
  let index = '';

  switch (action.type) {
    case GET_PRODUCT:
      stateCopy.product = action.payload;
      return stateCopy;

    case SET_PRODUCT:
      stateCopy.product = action.payload;
      return stateCopy;
    
    case GET_SINGLE_PRODUCT:
      stateCopy.singleProduct = action.payload;
      return stateCopy;
    
    case SET_SINGLE_PRODUCT:
      stateCopy.singleProduct = action.payload;
      return stateCopy;

    case CREATE_PRODUCT:
      stateCopy.createProduct = action.payload;
      return stateCopy;

    case PRODUCT_SUCCESS:
      stateCopy.product.push(action.payload);
      return stateCopy;

    case UPDATE_PRODUCT:
      index = stateCopy.product.map((items) => items.bookingID).indexOf(action.payload.bookingID)
      stateCopy.product.splice(index,1, action.payload);
      return stateCopy;

    case DELETE_PRODUCT:
      index = stateCopy.product.map((items) => items.bookingID).indexOf(action.payload)
      stateCopy.product.splice(index, 1)
      return stateCopy;

    case PRODUCT_DELETE_SUCCESS:
      stateCopy.message = action.payload;
      return stateCopy;

    case API_ERROR:
      stateCopy.error = action.payload;
      return stateCopy;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default product;
