import { Radio } from 'antd';
import BaseForm from '../BaseForm';

class RadioForm extends BaseForm {
  static validPropList = ['options', 'config', 'valueField', 'labelField', 'label', 'id', 'formItemLayout', 'decorator', 'form', 'defaultValue', 'value', 'status'];

  getComponent = () => {
    let { config, options, valueField = 'value', labelField = 'label' } = this.getValidProps(RadioForm.validPropList);

    options = options || (config && config.options) || [];
    if (config && config.options) {
      delete config.options;
    }
    
    return (
      <Radio.Group {...config}>
        {
          options.map((option, index) => {
            const optionConfig = option.optionConfig || {}
            return <Radio {...optionConfig} value={option[valueField]} key={index}>{option[labelField]}</Radio>
          })
        }
      </Radio.Group>
    )
  }

}

RadioForm.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    optionConfig: PropTypes.object
  })),
  config: PropTypes.object,
  valueField: PropTypes.string,
  labelField: PropTypes.string,
  label: PropTypes.string,
  formItemLayout: PropTypes.object,
  decorator: PropTypes.object,
  form: PropTypes.object.isRequired,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  status: PropTypes.string
}

RadioForm.defaultProps = {
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

export default RadioForm;