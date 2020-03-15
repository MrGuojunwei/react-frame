import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

class BaseForm extends React.Component {
    getFieldDecorator = () => {
        const { decorator, form, value, defaultValue, id } = this.props;
        if (!form) {
            throw Error('form object is required')
        }
        const { getFieldDecorator } = form;
        return getFieldDecorator(id, {
            initialValue: value === undefined ? defaultValue : value,
            ...decorator,
        })
    }

    getEditStatus = () => {
        const fieldDecorator = this.getFieldDecorator();
        const component = React.cloneElement(this.getComponent());
        return fieldDecorator(component);
    }

    getDisabledStatus = () => {
        const fieldDecorator = this.getFieldDecorator();
        const component = React.cloneElement(this.getComponent(), { disabled: true });
        return fieldDecorator(component);
    }
    getContent = () => {
        const { status = 'edit' } = this.props;

        switch (status) {
            case 'edit': return this.getEditStatus();
            case 'disabled': return this.getDisabledStatus();
            default: return null
        }
    }

    render() {
        const { formItemLayout, label } = this.props;
        return (
            <FormItem label={label} {...formItemLayout}>
                {this.getEditStatus()}
            </FormItem>
        )
    }

}

BaseForm.defaultProps = {
    label: '',
    id: '',
    formItemLayout: {},
    decorator: {},
    form: {},
    defaultValue: undefined,
    value: undefined,
    status: 'edit'
}

BaseForm.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    formItemLayout: PropTypes.object,
    decorator: PropTypes.object,
    form: PropTypes.object,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    status: PropTypes.string
}

export default BaseForm;