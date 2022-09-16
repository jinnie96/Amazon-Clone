// ------------------- Action types ------------------- //
const GET_REVIEWS = 'reviews/GET_REVIEWS'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const ADD_REVIEW = 'reviews/ADD_REVIEW'

// ------------------- Action creators ------------------- //
const getReviews = id => ({
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
    const response = await fetch (`/api/reviews/${id}`)
    if (response.ok) {
        const data = await response.json();
        const reviews = dispatch(getReviews(data));
        if (data.errors) {
            return;
        };
        return data;

    }
}

export const deleteOneReview = (productId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${productId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };

        dispatch(deleteReview(data));
        return data;
    }
};

export const editOneReview = (id, form) => async (dispatch) => {
    const response = await fetch(`/api/reviews/edit/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            form
        })
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };

        dispatch(editReview(data));
        return data;
    }
};

export const addOneReview = (id, form) => async dispatch => {
    const response = await fetch(`/api/reviews/new/${id}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            form
        })
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        };

        dispatch(addReview(data));
        return data;
    }
}

// ------------------- Reducer ------------------- //
const initialState = {}

export default function reviewsReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_REVIEWS:
            newState = {}
                for (let i = 0; i < action.payload.reviews.length; i++) {
                    newState[action.payload.reviews[i].id] = action.payload.reviews[i]
                }
            return newState;
        case DELETE_REVIEW:
            newState = {
                ...state,
            };
            delete newState[action.payload.id]
            return newState;
        case EDIT_REVIEW:
            newState = {
                ...state,
                'id': action.payload
            }
        case ADD_REVIEW:
            newState = {
                ...state,
                [action.payload.id]: [action.payload]
            };
            return newState;
        default:
            return state;
    }
}
