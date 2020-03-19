import InputForm from '../InputForm';
import SelectForm from '../SelectForm';
import RadioForm from '../RadioForm';

class FieldForm extends Component {

  getComponent() {
    const { type, ...restProp } = this.props;
    switch (type) {
      case 'input':
      case 'password':
      case 'textarea':
      case 'number':
      case 'search': return <InputForm type={type} {...restProp} />;
      case 'select': return <SelectForm {...restProp} />;
      case 'radio': return <RadioForm {...restProp} />
      default: return <InputForm type={type} {...restProp} />;
    }
  }

  render() {
    return this.getComponent();
  }
}

FieldForm.defaultProps = {
  type: 'input',
  config: {},
  label: '',
  id: '',
  formItemLayout: {},
  decorator: {},
  form: {},
  defaultValue: undefined,
  value: undefined,
  status: 'edit',
  options: []
}

FieldForm.propTypes = {
  type: PropTypes.oneOf(['input', 'password', 'textarea', 'number', 'search', 'select', 'radio']),
  config: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  formItemLayout: PropTypes.object,
  decorator: PropTypes.object,
  form: PropTypes.object.isRequired,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  status: PropTypes.string,
  options: PropTypes.array
}

export default FieldForm;