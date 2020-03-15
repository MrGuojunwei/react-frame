import React from 'react';
import { Input, InputNumber, Form } from 'antd';
import BaseForm from '../BaseForm';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

const COMPONENTTYPE = {
    input: Input,
    password: Input.Password,
    textarea: Input.TextArea,
    number: InputNumber,
    search: Input.Search,
}

class InputForm extends BaseForm {
    getComponent = () => {
        const { type = 'input', config, className = "" } = this.props;
        const TargetComponent = COMPONENTTYPE[type];
        return <TargetComponent className={className} {...config} />
    }
}

InputForm.defaultProps = {
    type: 'input',
    config: {}
}

InputForm.propTypes = {
    type: PropTypes.oneOf(['input', 'password', 'textarea', 'number', 'search']),
    config: PropTypes.object,
}

export default InputForm;