import { all } from "redux-saga/effects";
import { watcherStaffSaga } from "./handlers/fetchStaffs";
import { watcherAddStaffSaga } from "./handlers/fetchStaffs";

export default function* rootSaga() {
    yield all([
        watcherStaffSaga(),
        watcherAddStaffSaga(),
    ]);
}