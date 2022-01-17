import {
    GET_STAFFS_REQUESTED,
    ADD_NEW_STAFF
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

// export const actRemoveStaff = (id) => {
//     return {
//         type: REMOVE_STAFF,
//         id,
//     };
// };

// export const actEditStaff = (id, staff) => {
//     return {
//         type: EDIT_STAFF,
//         id,
//         staff,
//     };
// };

// export const petIncrement = (number) => {
//     return {
//         type: "PET_INCREASED",
//         payload: number,
//     };
// };

// export const petDecrement = () => {
//     return {
//         type: "PET_DECREASED",
//     };
// };