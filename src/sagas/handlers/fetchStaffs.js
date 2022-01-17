import {
    GET_STAFFS_REQUESTED,
    GET_STAFFS_SUCCESS,
    GET_STAFFS_FAILED
} from "./../../const/index";

import { call, put, takeLatest } from "redux-saga/effects";
import fetchGetStaffs from "../requests/fetchStaffs";

// const fetchGetStaffs = () => {
//     return fetch('http://localhost:8000/api/staffs', {
//         method: "GET",
//     })
//         .then((response) => response.json())
//         .catch((error) => {
//             throw error;
//         });
// };

function* handleGetStaffs() {
    try {
        const staffs = yield call(fetchGetStaffs);
        yield put({ type: GET_STAFFS_SUCCESS, staffs: staffs });
    } catch (err) {
        yield put({ type: GET_STAFFS_FAILED, message: err.message });
    }
}

function* watcherStaffSaga() {
    yield takeLatest(GET_STAFFS_REQUESTED, handleGetStaffs);
}

export default watcherStaffSaga;