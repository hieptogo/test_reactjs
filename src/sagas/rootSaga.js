import { all } from "redux-saga/effects";
import { 
    watcherStaffSaga,
    watcherAddStaffSaga,
    watcherRemoveStaffSaga
} from "./handlers/fetchStaffs";

export default function* rootSaga() {
    yield all([
        watcherStaffSaga(),
        watcherAddStaffSaga(),
        watcherRemoveStaffSaga(),
    ]);
}