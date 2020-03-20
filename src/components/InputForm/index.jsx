import { Input, InputNumber, Form } from 'antd';
import BaseForm from '../BaseForm';

const COMPONENTTYPE = {
    input: Input,
    password: Input.Password,
    textarea: Input.TextArea,
    number: InputNumber,
    search: Input.Search,
}

class InputForm extends BaseForm {

    getComponent = () => {
        const {
            type = 'input',
            id,
            form,
            decorator,
            status,
            value,
            defaultValue,
            extra,
            hasFeedback,
            help,
            htmlFor,
            label,
            labelCol,
            labelAlign,
            required,
            validateStatus,
            wrapperCol,
            colon,
            ...config
        } = this.props;

        const TargetComponent = COMPONENTTYPE[type];
        return <TargetComponent {...config} />
    }

}

InputForm.propTypes = {
    type: PropTypes.oneOf(['input', 'password', 'textarea', 'number', 'search']),
    id: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    decorator: PropTypes.object,
    status: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
}

InputForm.defaultProps = {
    type: 'input',
    id: '',
    form: undefined,
    decorator: {},
    status: 'edit',
    value: undefined,
    defaultValue: undefined,
}


export default InputForm;