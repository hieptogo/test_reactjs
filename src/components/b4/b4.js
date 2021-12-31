import React from 'react';

import Title from './../../components/layout/title';

import FormLogin from './../../components/b4/form_login';
import FormInfor from './../../components/b4/form_infor';

const B4 = () => {
    return (
        <>
            <Title title="Thực Hành Buổi 4" />
            <FormLogin />
            <hr />
            <FormInfor />
        </>
    )
}
export default B4;