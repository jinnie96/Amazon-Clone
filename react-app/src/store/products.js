// ------------------- Action types ------------------- //
const GET_PRODUCTS = 'products/GET_PRODUCTS'
const GET_ONE_PRODUCT = 'products/GET_ONE_PRODUCT'

// ------------------- Action creators ------------------- //
const getProducts = products => ({
    type:GET_PRODUCTS,
    payload: products
})

const getOneProduct = product => ({
    type: GET_ONE_PRODUCT,
    payload: product
});

// ------------------- Thunk creators ------------------- //
export const getAllProducts = () => async dispatch => {
    const response = await fetch (`/api/products/`)
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        if (data.errors) {
            return;
        };

        dispatch(getProducts(data));
        return data;
    }
}

export const getSingleProduct = (productId) => async (dispatch) => {
    console.log("INSIDE")
    const response = await fetch(`/api/products/${productId}`);
    console.log(response, "RES")
    if (response.ok) {
        const data = await response.json();
        console.log("DATA", data)
        if (data.errors) {
            return;
        };

        dispatch(getOneProduct(data));
        return data;
    }
};

// ------------------- Reducer ------------------- //
const initialState = {}

export default function productsReducer(state = initialState, action) {
    console.log(action)
    let newState;
    switch(action.type) {
        case GET_PRODUCTS:
            newState = { ...state }
            for (const key in action.payload) {
                newState[action.payload[key].id] = action.payload[key]
            }
            return newState;
        case GET_ONE_PRODUCT:
            newState = {
                ...state,
                'id': action.payload
                // [action.payload.post.id]: action.payload.post
            };
            return newState;

        default:
            return state;
    }
}
