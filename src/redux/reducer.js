import { PRODUCT_DATA } from '../shared/data'


export const initialState = {
    data: PRODUCT_DATA,
};

export const Reducer = (state = initialState, action) => {
    //if (action.type === 'productView/CHANGE_PRODUCT')
    //    return {...state, data:action.payload}
    return state
}