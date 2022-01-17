import axios from "axios";
import { GET_STAFF, ADD_NEW_STAFF, REMOVE_STAFF, EDIT_STAFF } from "../const/index";

export const actAddStaff = (staff) => {
    // return dispatch => {
    //     axios.post('http://localhost:8000/api/staffs', {staff})
    //     .then(response => {
    //         console.log(response);

    //         axios.get('http://localhost:8000/api/staffs')
    //         .then(res => {
    //             dispatch({
    //                 type: GET_STAFF,
    //                 users: response
    //             });
    //         })
    //     })
    // };
    return {
        type: ADD_NEW_STAFF,
        staff,
    };
};

export const actRemoveStaff = (id) => {
    return {
        type: REMOVE_STAFF,
        id,
    };
};

export const actEditStaff = (id, staff) => {
    return {
        type: EDIT_STAFF,
        id,
        staff,
    };
};