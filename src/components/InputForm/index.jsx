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
    static validPropList = ['input', 'config', 'label', 'id', 'formItemLayout', 'decorator', 'form', 'defaultValue', 'value', 'status'];

    getComponent = () => {
        const { type = 'input', config, } = this.getValidProps(InputForm.validPropList);

        const TargetComponent = COMPONENTTYPE[type];
        return <TargetComponent {...config} />
    }

}

InputForm.defaultProps = {
    type: 'input',
    config: {},
    label: '',
    id: '',
    formItemLayout: {},
    decorator: {},
    form: {},
    defaultValue: undefined,
    value: undefined,
    status: 'edit'
}

InputForm.propTypes = {
    type: PropTypes.oneOf(['input', 'password', 'textarea', 'number', 'search']),
    config: PropTypes.object,
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    formItemLayout: PropTypes.object,
    decorator: PropTypes.object,
    form: PropTypes.object.isRequired,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    status: PropTypes.string
}

export default InputForm;