import { combineReducers } from 'redux'
import staffs from './staffs'

//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
const reducers = combineReducers({
    staffs,
});

export default reducers;