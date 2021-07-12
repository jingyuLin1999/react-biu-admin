import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { userLogin } from '@/store/user/actions';
import logo from '@/assets/logo.svg'
import "./login.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="login-wrapper">
                <Form className="login-form" onFinish={(values) => this.props.login(values)}>
                    <Form.Item>
                        <div className="logo-wrapper">
                            <img className="logo" src={logo} alt="logo" />
                            <div className="site-logo">BIU ADMIN</div>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input placeholder="用户" autoComplete="username" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password placeholder="密码" autoComplete="new-password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const mapState = (state) => ({
    loginStatus: state.user.get("loginStatus")
})

const mapDispatch = (dispatch) => ({
    login(values) {
        dispatch(userLogin(values))
    }
})


export default connect(mapState, mapDispatch)(Login);