import React from 'react';
import ReactDom from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="react">hello react fff</div>
        )
    }
}

ReactDom.render(<Layout />, document.getElementById('app'));