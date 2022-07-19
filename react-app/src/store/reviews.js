// ------------------- Action types ------------------- //
const GET_REVIEWS = 'reviews/GET_REVIEWS'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const ADD_REVIEW = 'reviews/ADD_REVIEW'

// ------------------- Action creators ------------------- //
const getReviews = id => ({
    // console.log(cart)
    type:GET_REVIEWS,
    payload: id
})

const deleteReview = id => ({
    type: DELETE_REVIEW,
    payload: id
});

const editReview = id => ({
    type: EDIT_REVIEW,
    payload:id
})

const addReview = id => ({
    type: ADD_REVIEW,
    payload:id
})

// ------------------- Thunk creators ------------------- //
export const getAllReviews = (id) => async dispatch => {
    console.log(id, "YO")
    const response = await fetch (`/api/reviews/${id}`)
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

export const deleteOneReview = (productId) => async (dispatch) => {
    console.log("INSIDE", productId)
    const response = await fetch(`/api/reviews/${productId}`, {
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

export const editOneReview = (productId) => async (dispatch) => {
    console.log("INSIDE", productId)
    const response = await fetch(`/api/reviews/${productId}`, {
        method: 'PUT',
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

export const addOneReview = (id) => async dispatch => {
    console.log("HEYHEY")
    const response = await fetch(`/api/reviews/${id}`, {
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
    console.log("REDICER", action.payload)
    let newState;
    switch(action.type) {
        case GET_REVIEWS:
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
        case EDIT_REVIEW:
            newState = {
                ...state,
                'id': action.payload
            }
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
