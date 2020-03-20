import { Radio } from 'antd';
import BaseForm from '../BaseForm';

class RadioForm extends BaseForm {


  getComponent = () => {
    const {
      id,
      form,
      decorator,
      status,
      value,
      defaultValue,
      options,
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
      <Radio.Group {...config}>
        {
          options.map((option, index) => {
            const { optionConfig = {} } = option;
            return <Radio {...optionConfig} value={option[valueField]} key={optionConfig.key || index}>{option[labelField]}</Radio>
          })
        }
      </Radio.Group>
    )
  }

}

RadioForm.propTypes = {
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

RadioForm.defaultProps = {
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

export default RadioForm;