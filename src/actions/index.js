import {
    GET_STAFFS_REQUESTED,
    ADD_NEW_STAFF,
    REMOVE_STAFF_SUCCESS,
    REMOVE_STAFF,
    EDIT_STAFF,
    EDIT_STAFF_SUCCESS
} from "../const/index";

export const getStaff = () => {
    return {
        type: GET_STAFFS_REQUESTED,
    };
};

export const actAddStaff = (staff) => {
    return {
        type: ADD_NEW_STAFF,
        staff,
    };
};

export const actRemoveStaff = (staffId) => {
    return {
        type: REMOVE_STAFF,
        staffId,
    };
};

export const actRemoveStaffSuccess = (staffId) => {
    return {
        type: REMOVE_STAFF_SUCCESS,
        staffId,
    };
};

export const actEditStaff = (id, staff) => {
    return {
        type: EDIT_STAFF,
        id,
        staff,
    };
};
