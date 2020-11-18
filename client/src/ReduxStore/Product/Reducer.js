import {
  GET_PRODUCT,
  SET_PRODUCT,
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

console.log(initialState, "initialState");
const product = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  console.log("statecopy>>", stateCopy);
  switch (action.type) {
    case GET_PRODUCT:
      stateCopy.product = action.payload;
      return stateCopy;

    case SET_PRODUCT:
      stateCopy.product = action.payload;
      return stateCopy;

    case CREATE_PRODUCT:
      stateCopy.createProduct = action.payload;
      return stateCopy;

    case PRODUCT_SUCCESS:
      stateCopy.product.push(action.payload);
      return stateCopy;

    case UPDATE_PRODUCT:
      state = {
        ...state,
        product: action.payload,
        error: null,
      };
      break;

    case DELETE_PRODUCT:
      stateCopy.deletedProduct = action.payload;
      return stateCopy;

    case PRODUCT_DELETE_SUCCESS:
      stateCopy.product = action.payload;
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
