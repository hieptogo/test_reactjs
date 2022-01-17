import { all } from "redux-saga/effects";
import watcherStaffSaga from "./handlers/fetchStaffs";

export default function* rootSaga() {
    yield all([watcherStaffSaga()]);
}