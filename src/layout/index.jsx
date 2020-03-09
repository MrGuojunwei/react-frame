import React from 'react';
import ReactDom from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>hello react</div>
        )
    }
}

ReactDom.render(<Layout />, document.getElementById('app'));