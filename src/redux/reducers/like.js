import {ItemInLike} from "../action-types";

const initialState = {
    like: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ItemInLike: {
            const updatedLike = state.like.filter(
                el => el.id !== action.payload.id
            );
            if (updatedLike.length === state.like.length) {
                updatedLike.push(action.payload);
            }
            return {...state, like: updatedLike};
        }
        default: {
            return state;
        }
    }
};
