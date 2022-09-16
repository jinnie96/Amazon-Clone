// ------------------- Action types ------------------- //
const GET_CART = 'carts/GET_CART'
const DELETE_CART = 'carts/DELETE_CART'
const ADD_CART = 'carts/ADD_CART'
const EDIT_CART = 'carts/EDIT_CART'

// ------------------- Action creators ------------------- //
const getCart = cart => ({
    type:GET_CART,
    payload: cart
})

const deleteCart = id => ({
    type: DELETE_CART,
    payload: id
});

const editCart = id => ({
    type: EDIT_CART,
    payload: id
})

const addCart = id => ({
    type: ADD_CART,
    payload:id
})

// ------------------- Thunk creators ------------------- //
export const getCarts = (id) => async dispatch => {
    const domain = window.location.origin
    const response = await fetch (`/api/carts/${id}`)
    if (response.ok) {
        const data = await response.json();
        dispatch(getCart(data));
        if (data.errors) {
            return;
        };

    }
}

export const deleteCarts = (productId) => async (dispatch) => {
    const response = await fetch(`/api/carts/${productId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };

        dispatch(deleteCart(productId));
        return data;
    }
};

export const deleteAllCart = (userId) => async (dispatch) => {
    const response = await fetch(`/api/carts/all/${userId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };

        dispatch(deleteCart(data));
        return data;
    }
};

export const editCartQuantity = (quantity, id) => async dispatch => {
    const response = await fetch(`api/carts/edit/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            quantity
        })
    })
    if (response.ok) {
        const data=await response.json()
        dispatch(editCart(data))
    }
}

export const addtoCart = (id) => async dispatch => {
    const response = await fetch(`/api/carts/${id}`, {
        method: 'POST',
        body: id
    })
    if (response.ok) {
        const data = await response.json();
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
    let newState;
    switch(action.type) {
        case GET_CART:
            newState = { ...state }
            for (const key in action.payload) {
                if (action.payload[key].id) newState[action.payload[key].id] = action.payload[key]
            }
            newState['count'] = action.payload['count']
            newState['total'] = action.payload['total']
            return newState;
        case DELETE_CART:
            newState = {
                ...state,
            };
            for (const key in newState) {
                delete newState[key]
            }
            return newState;
        case EDIT_CART:
            newState = {
               ...state,
            }
            newState[action.payload.id] = action.payload
            newState['count'] = action.payload['count']
        case ADD_CART:
            newState = {
                ...state,
                [action.payload.id]: [action.payload][0]
            };
            return newState;
        default:
            return state;
    }
}
