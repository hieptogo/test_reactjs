import React from "react";
//Kết nối vơi redux
import { connect } from "react-redux";

import Title from './../../components/layout/title';

import AddStaff from './add_staff';
import ShowStaff from './show_staff';


const B5 = (props) => {
    return (
        <>
            <Title title="Thực Hành Buổi 5" />
            <AddStaff />
            <ShowStaff staffData={props.staffs} />
        </>
    )
}

// Lấy state từ store bằng mapStateToProps
// Lúc này state nhận được sẽ gán vào props
const mapStateToProps = (state, ownProps) => {
    // Gán state nhận về từ store 
    // thành props có tên note (props.staffs)
    return {
        staffs: state.staffs,
    };
};

export default connect(mapStateToProps, null)(B5);