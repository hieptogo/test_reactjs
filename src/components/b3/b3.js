import React from 'react';

import Title from './../../components/layout/title';

import FormSubmit from './../../components/b3/b3_form_submit';
import ChangeValue from './../../components/b3/b3_change_value_input';
import ListTodo from './../../components/b3/list_todo';

const B3 = () => {
    return (
        <>
            <Title title="Thực Hành Buổi 3" />
            <FormSubmit />
            <ChangeValue />
            <ListTodo />
        </>
    )
}
export default B3;