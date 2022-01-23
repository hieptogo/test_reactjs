import * as React from 'react';

import { useEffect, useState } from "react";
import {
    useSelector,
    useDispatch,
    connect
} from "react-redux";

import { Table, Row } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Pagination from '@mui/material/Pagination';

import ModalAddEditStaff from './modal_add_edit';

import {
    getStaff,
    actEditStaff,
    actRemoveStaff,
    actRemoveStaffSuccess
} from "./../../actions/index";

const mapDispatchToProps = (dispatch) => {
    return {
        editStaff: (id, staff) => {
            dispatch(actEditStaff(id, staff));
        },
        removeStaff: id => {
            dispatch(actRemoveStaff(id));
        },
        removeStaffSuccess: id => {
            dispatch(actRemoveStaffSuccess(id));
        }
    };
};

const ShowStaff = (props) => {
    const dispatch = useDispatch();
    const staffs = useSelector((state) => state.staffs.staffs);
    const loading = useSelector((state) => state.staffs.loading);
    const error = useSelector((state) => state.staffs.error);

    const [flag, setFlag] = useState(false);
    const [dataStaff, setDataStaff] = useState([]);
    const submitForm = (staff) => {
        props.addStaff(staff);
        hideModal();
    };

    const hideModal = () => setFlag(false);
    const showModal = () => setFlag(true);

    useEffect(() => {
        dispatch(getStaff());
    }, []);

    // // Được gọi mỗi khi thay đổi giá trị
    // // của ghi chú.
    // const handleChange = (e) => {
    //     setNoteContent(e.target.value)
    //     props.editNote(noteID, e.target.value)
    // }

    const EditTodo = (id) => {
        const dataFind = staffs.data.find((staff) => {
            return staff.id === id;
        })
        setDataStaff(dataFind)
        showModal()
    }

    const handleRemoveNote = (staffId) => {
        const confirm = window.confirm('Bạn có muốn xóa nhân viên này không?');
        if (confirm == true) {
            props.removeStaff(staffId)
        }
    }

    const dataTable = staffs.data && staffs.data.map((item, index) =>
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.positions}</td>
            <td>{item.address}</td>
            <td>
                <IconButton aria-label="edit" color="success" onClick={() => EditTodo(item.id)}>
                    <BorderColorIcon />
                </IconButton>
                <IconButton aria-label="delete" color="error" onClick={() => handleRemoveNote(item.id)}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );

    return (
        <>
            <ModalAddEditStaff
                show={flag}
                hideModal={hideModal}
                submitForm={submitForm}
                data={dataStaff}
            />

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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable}
                </tbody>
            </Table>
            {/* <Row>
                <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
            </Row> */}
        </>
    );
}
export default connect(null, mapDispatchToProps)(ShowStaff);
