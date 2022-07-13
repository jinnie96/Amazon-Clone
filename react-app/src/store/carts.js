// ------------------- Action types ------------------- //
const GET_CART = 'carts/GET_CART'
const DELETE_CART = 'carts/DELETE_CART'
const ADD_CART = 'carts/ADD_CART'

// ------------------- Action creators ------------------- //
const getCart = cart => ({
    type:GET_CART,
    payload: cart
})

const deleteCart = id => ({
    type: DELETE_CART,
    payload: id
});

const addCart = id => ({
    type: ADD_CART,
    payload:id
})

// ------------------- Thunk creators ------------------- //
export const getCarts = (id) => async dispatch => {
    const response = await fetch (`/api/products/${id}`)
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        if (data.errors) {
            return;
        };

        dispatch(getCart(data));
        return data;
    }
}

export const deleteCarts = (productId) => async (dispatch) => {
    console.log("INSIDE")
    const response = await fetch(`/api/products/${productId}`);
    console.log(response, "RES")
    if (response.ok) {
        const data = await response.json();
        console.log("DATA", data)
        if (data.errors) {
            return;
        };

        dispatch(deleteCart(data));
        return data;
    }
};

export const addtoCart = (id) => async dispatch => {
    const response = await fetch(`/api/products`, {
        method: 'POST',
        body: id
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        if (data.errors) {
            return;
        };

        dispatch(addCart(data));
        return data;
    }
}

// ------------------- Reducer ------------------- //
const initialState = {}

export default function cartsReducer(state = initialState, action) {
    console.log(action)
    let newState;
    switch(action.type) {
        case GET_CART:
            newState = { ...state }
            for (const key in action.payload) {
                newState[action.payload[key].id] = action.payload[key]
            }
            return newState;
        case DELETE_CART:
            newState = {
                ...state,
                'id': action.payload
                // [action.payload.post.id]: action.payload.post
            };
            return newState;
        case ADD_CART:
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
