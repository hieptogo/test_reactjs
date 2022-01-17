import {
    GET_STAFFS,
    GET_STAFFS_SUCCESS,
    GET_STAFFS_FAILED,
    ADD_NEW_STAFF,
    REMOVE_STAFF,
    EDIT_STAFF
} from "../const/index";

const initialState = {
    staffs: [],
    loading: false,
    error: null
}

const staffReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAFFS:
            state = { ...state, loading: true };
            return state;

        case GET_STAFFS_SUCCESS:
            return { ...state, loading: false, users: action.users };

        case GET_STAFFS_FAILED:
            return { ...state, loading: false, error: action.message };

        case ADD_NEW_STAFF:
            const generateID = new Date().getTime();
            action.staff.id = generateID;
            state = [...state, { id: generateID, staff: action.staff }];
            return state;

        case EDIT_STAFF:
            const indexOfEditNote = state.findIndex((note) => note.id === action.id);
            if (indexOfEditNote !== -1)
                state[indexOfEditNote].staff = action.staff;

            return state;

        case REMOVE_STAFF:
            const idRemove = action.id;
            state = state.filter(note => {
                if (note.id === idRemove)
                    return false
                return true
            })
            return state;

        case "GET_USERS_REQUESTED":
            return { ...state, loading: true };
        case "GET_USERS_SUCCESS":
            return { ...state, loading: false, users: action.users };
        case "GET_USERS_FAILED":
            return { ...state, loading: false, error: action.message };

        default:
            return state;
    }
};

export default staffReducers