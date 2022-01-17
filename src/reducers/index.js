import {combineReducers} from 'redux'
import staffReducers from './staff_reducers'
 
//Ở đay chúng ta có thể gộp nhiều reducers
// Ở ví dụ này mình chỉ có 1 reducers là noteReducers
export default combineReducers({
    staffs: staffReducers
})