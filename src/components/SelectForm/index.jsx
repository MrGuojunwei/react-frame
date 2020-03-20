import { Select } from 'antd';
import BaseForm from '../BaseForm';

const Option = Select.Option;

class SelectForm extends BaseForm {

    getComponent() {
        const {
            id,
            form,
            decorator,
            status,
            value,
            defaultValue,
            options = [],
            valueField = 'value',
            labelField = 'label',
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

        return (
            <Select {...config}>
                {
                    options.map((option, index) => {
                        const { optionConfig = {} } = option;
                        return <Option  {...optionConfig} key={optionConfig.key || index} value={option[valueField]}>{option[labelField]}</Option>
                    })
                }
            </Select>
        )
    }
}

SelectForm.propTypes = {
    id: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    decorator: PropTypes.object,
    status: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.shape({
        optionConfig: PropTypes.object
    })),
    valueField: PropTypes.string,
    labelField: PropTypes.string,
}

SelectForm.defaultProps = {
    id: '',
    form: undefined,
    decorator: {},
    status: 'edit',
    value: undefined,
    defaultValue: undefined,
    options: [],
    valueField: 'value',
    labelField: 'label',
}

export default SelectForm;