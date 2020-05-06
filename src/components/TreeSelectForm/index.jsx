import { TreeSelect } from 'antd';
import BaseForm from '../BaseForm';

class TreeSelectForm extends BaseForm {

    getComponent() {
        const { valueField = 'value', labelField = 'title', config = {} } = this.props;
        let { treeData, ...rest } = config;
        if (valueField !== 'value' || labelField !== 'title') {
            treeData = this.handleTreeData(treeData);
        }

        return (
            <TreeSelect treeData={treeData} {...rest} />
        )
    }

    handleTreeData(treeData) {
        const { valueField = 'value', labelField = 'title' } = this.props;
        let result;
        if (!Array.isArray(treeData) || treeData.length === 0) {
            return [];
        }
        result = treeData.map(item => {
            item.value = item[valueField];
            item.title = item[labelField];
            item.key = item.key || item.value;
            item.children = this.handleTreeData(item.children);
            return item;
        })
        return result;
    }
}

TreeSelectForm.propTypes = {
    config: PropTypes.object,
    valueField: PropTypes.string,
    labelField: PropTypes.string,
}

TreeSelectForm.defaultProps = {
    config: {},
    valueField: 'value',
    labelField: 'title',
}

export default TreeSelectForm;