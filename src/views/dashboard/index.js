import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import "./dashboard.scss";

class Home extends PureComponent {
    render() {
        return (
            <div className="dashboard-wrapper">
                home
            </div>
        )
    }
}

const mapState = (state) => ({
    loginStatus: state.user.get("loginStatus")
})

const mapDispatch = (dispatch) => ({
    getUserInfo() { },
})

export default connect(mapState, mapDispatch)(Home);