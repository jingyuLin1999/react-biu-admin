import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Simple extends PureComponent {
    render() {
        return (<div>simpletable</div>)
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Simple);