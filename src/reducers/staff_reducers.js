import { ADD_NEW_STAFF, REMOVE_STAFF, EDIT_STAFF } from "../const/index";

const staffReducers = (state = [], action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};

export default staffReducers