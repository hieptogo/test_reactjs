import {
    GET_STAFFS_REQUESTED,
    GET_STAFFS_SUCCESS,
    GET_STAFFS_FAILED,
    // ADD_NEW_STAFF,
    REMOVE_STAFF_SUCCESS
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

        // case ADD_NEW_STAFF:
        //     return { ...state, staff: action.staff };

        // case EDIT_STAFF:
        //     const indexOfEditNote = state.findIndex((note) => note.id === action.id);
        //     if (indexOfEditNote !== -1)
        //         state[indexOfEditNote].staff = action.staff;
        //     return state;

        case REMOVE_STAFF_SUCCESS:
            // const filterStaffs = staffs.filter(staff => {
            //     return staff.id.toString() !== action.staffId.toString();
            // });
            // return filterStaffs;
            return { ...state, loading: true };
        default:
            return state;
    }
};

export default staffs;