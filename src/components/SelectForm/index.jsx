import React from 'react';
import { Select } from 'antd';
import BaseForm from '../BaseForm';
import PropTypes from 'prop-types';

const Option = Select.Option;

class SelectForm extends BaseForm {

    constructor(props) {
        super(props);

    }

    getComponent() {
        const { options = [], config = {}, valueField = 'value', labelField = 'label' } = this.props;

        return (
            <Select {...config}>
                {
                    options.map((option, index) => {
                        const { config = {} } = option;
                        return <Option key={index} value={option[valueField]} {...config}>{option[labelField]}</Option>
                    })
                }
            </Select>
        )
    }
}

SelectForm.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        config: PropTypes.object
    })),
    config: PropTypes.object,
    valueField: PropTypes.string,
    labelField: PropTypes.string,
}

SelectForm.defaultProps = {
    options: [],
    config: {},
    valueField: 'value',
    labelField: 'label'
}

export default SelectForm;