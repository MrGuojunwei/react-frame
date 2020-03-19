import { Select } from 'antd';
import BaseForm from '../BaseForm';

const Option = Select.Option;

class SelectForm extends BaseForm {
    static validPropList = ['options', 'config', 'valueField', 'labelField', 'label', 'id', 'formItemLayout', 'decorator', 'form', 'defaultValue', 'value', 'status'];

    getComponent() {
        const { options = [], config = {}, valueField = 'value', labelField = 'label' } = this.getValidProps(SelectForm.validPropList);;
        
        return (
            <Select {...config}>
                {
                    options.map((option, index) => {
                        const { optionConfig = {} } = option;
                        return <Option  {...optionConfig} key={index} value={option[valueField]}>{option[labelField]}</Option>
                    })
                }
            </Select>
        )
    }
}

SelectForm.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        config: PropTypes.object
    })),
    config: PropTypes.object,
    valueField: PropTypes.string,
    labelField: PropTypes.string,
    label: PropTypes.string,
    formItemLayout: PropTypes.object,
    decorator: PropTypes.object,
    form: PropTypes.object,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    status: PropTypes.string
}

SelectForm.defaultProps = {
    id: '',
    options: [],
    config: {},
    valueField: 'value',
    labelField: 'label',
    label: '',
    formItemLayout: {},
    decorator: {},
    form: {},
    defaultValue: undefined,
    value: undefined,
    status: 'edit'

}

export default SelectForm;