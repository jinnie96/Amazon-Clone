// ------------------- Action types ------------------- //
const GET_CART = 'carts/GET_CART'
const DELETE_CART = 'carts/DELETE_CART'
const ADD_CART = 'carts/ADD_CART'

// ------------------- Action creators ------------------- //
const getCart = cart => ({
    // console.log(cart)
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
    console.log(id, "YO")
    const response = await fetch (`/api/carts/${id}`)
    if (response.ok) {
        const data = await response.json();
        console.log("DATA", data)
        dispatch(getCart(data));
        if (data.errors) {
            return;
        };
        // return data;

    }
}

export const deleteCarts = (productId) => async (dispatch) => {
    console.log("INSIDE", productId)
    const response = await fetch(`/api/carts/${productId}`, {
        method: 'DELETE',
    })
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
    console.log("HEYHEY")
    const response = await fetch(`/api/carts/${id}`, {
        method: 'POST',
        body: id
    })
    if (response.ok) {
        const data = await response.json();
        console.log("ADDED", data)
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
    console.log("CARTSREDICER", action.payload)
    let newState;
    switch(action.type) {
        case GET_CART:
            newState = { ...state }
            for (const key in action.payload) {
                console.log(key)
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
                [action.payload.id]: action.payload
                // [action.payload.post.id]: action.payload.post
            };
            return newState;
        default:
            return state;
    }
}
