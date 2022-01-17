import * as React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Table } from 'react-bootstrap';
import { connect } from "react-redux";

import { actRemoveStaff, actEditStaff, getStaff } from "./../../actions/index";

function ShowStaff() {
    const dispatch = useDispatch();
    const staffs = useSelector((state) => state.staffs.staffs);
    const loading = useSelector((state) => state.staffs.loading);
    const error = useSelector((state) => state.staffs.error);

    console.log(staffs)
    useEffect(() => {
        dispatch(getStaff());
    }, []);

    // // Được gọi mỗi khi thay đổi giá trị
    // // của ghi chú.
    // const handleChange = (e) => {
    //     setNoteContent(e.target.value)
    //     props.editNote(noteID, e.target.value)
    // }

    // //Được gọi khi click vào 
    // //xóa ghi chú.
    // const handleRemoveNote = () => {
    //     props.removeNote(noteID)
    // }

    const dataTable = staffs.data && staffs.data.map((item, index) =>
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.position}</td>
            <td>{item.address}</td>
        </tr>
    );

    return (
        <>
            {loading && <h2>Loading...</h2>}
            {error && !loading && <h2>{error}</h2>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã nhân viên</th>
                        <th>Họ tên</th>
                        <th>Tuổi</th>
                        <th>Nghề ngiệp</th>
                        <th>Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable}
                </tbody>
            </Table>
        </>
    );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         editStaff: (id, content) => {
//             dispatch(actEditStaff(id, content));
//         },
//         removeStaff: id => {
//             dispatch(actRemoveStaff(id));
//         }
//     };
// };

// const mapStateToProps = (state, ownProps) => {
//     return {
//         staffs: state.staffs,
//     };
// };

export default ShowStaff;