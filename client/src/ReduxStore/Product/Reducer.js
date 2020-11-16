import {
    GET_PRODUCT,
    SET_PRODUCT,
    API_ERROR
} from './ActionTypes';

const initialState = {
    product: null,
    message: null,
    action_type: null
};

const product = (state = initialState, action) => {

    switch(action.type) {
        case GET_PRODUCT:
            state = {
                ...state,
                product: action.payload
            };
            break;
        case SET_PRODUCT:
            state = {
                ...state,
                product: action.payload,
                message: action.message,
                action_type: action.action_type
            }
            break;

            case API_ERROR:
                state = {
                  ...state,
                  error: action.payload,
                };
                break;
          
              default:
                state = { ...state };
                break;
    }
    return state;
} 

export default product;