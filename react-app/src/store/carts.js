// ------------------- Action types ------------------- //
const GET_CART = 'carts/GET_CART'
const DELETE_CART = 'carts/DELETE_CART'
const ADD_CART = 'carts/ADD_CART'
const EDIT_CART = 'carts/EDIT_CART'

// ------------------- Action creators ------------------- //
const getCart = cart => ({
    // // console.log(cart)
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
    // console.log(id, "YO")
    const domain = window.location.origin
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
    // console.log("INSIDE", productId)
    // window.location.href = `/cart`
    const response = await fetch(`/api/carts/${productId}`, {
        method: 'DELETE',
    })
    // console.log(response, "RES")
    if (response.ok) {
        const data = await response.json();
        // console.log("DATA", data)
        if (data.errors) {
            return;
        };

        dispatch(deleteCart(productId));
        return data;
    }
};

export const deleteAllCart = (userId) => async (dispatch) => {
    // console.log("INSIDE", userId)
    // window.location.href = `/cart`
    const response = await fetch(`/api/carts/all/${userId}`, {
        method: 'DELETE',
    })
    // console.log(response, "RES")
    if (response.ok) {
        const data = await response.json();
        // console.log("DATA", data)
        if (data.errors) {
            return;
        };

        dispatch(deleteCart(data));
        return data;
    }
};

export const editCartQuantity = (quantity, id) => async dispatch => {
    // console.log(quantity, id, "HEH")
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
        // console.log("EDITCARTDATA", data)
        dispatch(editCart(data))
    }
}

export const addtoCart = (id) => async dispatch => {
    // console.log("HEYHEY")
    const response = await fetch(`/api/carts/${id}`, {
        method: 'POST',
        body: id
    })
    if (response.ok) {
        const data = await response.json();
        // console.log("ADDED", data)
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
    // console.log("CARTSREDICER", action.payload, action.type, state)
    // // console.log(action.payload['id'])
    let newState;
    switch(action.type) {
        case GET_CART:
            newState = { ...state }
            for (const key in action.payload) {
                // console.log(key)
                if (action.payload[key].id) newState[action.payload[key].id] = action.payload[key]
                // else (newState[action.payload[key]] = action.payload[key])
            }
            newState['count'] = action.payload['count']
            newState['total'] = action.payload['total']
            return newState;
        case DELETE_CART:
            newState = {
                ...state,
                // 'id': action.payload
                // [action.payload.post.id]: action.payload.post
            };
            for (const key in newState) {
                // console.log(".....", key, !(key === 'count'), !(key === 'total'))
                delete newState[key]
                // if (!(key === 'count') || !(key === 'total')) {
                //     // console.log(newState[key])
                // }
            }
            return newState;
        case EDIT_CART:
            newState = {
               ...state,
               // 'id': action.payload
            }
            newState[action.payload.id] = action.payload
            newState['count'] = action.payload['count']
        case ADD_CART:
            newState = {
                ...state,
                [action.payload.id]: [action.payload][0]
                // [action.payload.post.id]: action.payload.post
            };
            return newState;
        default:
            return state;
    }
}
