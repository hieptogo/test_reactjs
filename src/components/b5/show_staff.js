import * as React from 'react';

import { Table } from 'react-bootstrap';
import { connect } from "react-redux";

import { actRemoveStaff, actEditStaff } from "./../../actions/index";

function ShowStaff(props) {
    const { staffData } = props;

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
    const dataTable = staffData.map((item, index) =>
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.staff.staff_code}</td>
            <td>{item.staff.staff_name}</td>
            <td>{item.staff.staff_age}</td>
            <td>{item.staff.staff_position}</td>
            <td>{item.staff.staff_address}</td>
        </tr>
    );

    return (
        <>
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

const mapDispatchToProps = (dispatch) => {
    return {
        editStaff: (id, content) => {
            dispatch(actEditStaff(id, content));
        },
        removeStaff: id => {
            dispatch(actRemoveStaff(id));
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        staffs: state.staffs,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowStaff);