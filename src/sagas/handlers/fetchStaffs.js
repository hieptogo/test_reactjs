import {
    GET_STAFFS_REQUESTED,
    GET_STAFFS_SUCCESS,
    GET_STAFFS_FAILED,
    ADD_NEW_STAFF
} from "./../../const/index";

import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./../api";
import staffs from "../../reducers/staffs";

// Get data staffs
function* getStaffs() {
    try {
        const staffs = yield call(Api.fetchGetStaffs);
        yield put({ type: GET_STAFFS_SUCCESS, staffs: staffs });
    } catch (err) {
        yield put({ type: GET_STAFFS_FAILED, message: err.message });
    }
}

export function* watcherStaffSaga() {
    yield takeLatest(GET_STAFFS_REQUESTED, getStaffs);
}

// Add new staff
function* addNewStaffs(action) {
    try {
        const staff = yield call(Api.insertNewStaff(action.staff));
        if (staff === true) {
            yield put({ type: GET_STAFFS_REQUESTED });
        }
    } catch (err) {
        yield put({ type: GET_STAFFS_FAILED, message: err.message });
    }
}

export function* watcherAddStaffSaga() {
    yield takeLatest(ADD_NEW_STAFF, addNewStaffs);
}