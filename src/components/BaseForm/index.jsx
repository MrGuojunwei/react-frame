import { Form, Input } from 'antd';

const FormItem = Form.Item;

class BaseForm extends React.Component {

    getFieldDecorator = () => {
        const { id, decorator, form, value, defaultValue } = this.props;
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
        const {
            extra = '',
            hasFeedback = false,
            help,
            htmlFor,
            label = '',
            labelCol = {},
            labelAlign = 'right',
            required,
            validateStatus,
            wrapperCol = {},
            colon = true,
        } = this.props;
        return (
            <FormItem
                extra={extra}
                hasFeedback={hasFeedback}
                help={help}
                htmlFor={htmlFor}
                label={label}
                labelCol={labelCol}
                labelAlign={labelAlign}
                required={required}
                validateStatus={validateStatus}
                wrapperCol={wrapperCol}
                colon={colon}
            >
                {this.getContent()}
            </FormItem>
        )
    }

}

BaseForm.propTypes = {
    id: PropTypes.string.isRequired,
    form: PropTypes.object,
    decorator: PropTypes.object,
    status: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    ...FormItem.propTypes
}

BaseForm.defaultProps = {
    id: '',
    form: undefined,
    decorator: {},
    status: 'edit',
    value: undefined,
    defaultValue: undefined,
    ...FormItem.defaultProps
}

export default BaseForm;