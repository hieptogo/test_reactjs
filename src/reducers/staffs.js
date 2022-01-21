import {
    GET_STAFFS_REQUESTED,
    GET_STAFFS_SUCCESS,
    GET_STAFFS_FAILED,
    ADD_NEW_STAFF
} from "../const/index";

const initialState = {
    staffs: [],
    loading: false,
    error: null,
};

const staffs = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAFFS_REQUESTED:
            return { ...state, loading: true };

        case GET_STAFFS_SUCCESS:
            return { ...state, loading: false, staffs: action.staffs };

        case GET_STAFFS_FAILED:
            return { ...state, loading: false, error: action.message };

        case ADD_NEW_STAFF:
            return {...state, staff: action.staff };

        default:
            return state;
    }
};

export default staffs;