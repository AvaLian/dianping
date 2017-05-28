import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo' ;

import Header from '../../components/Header';
// import LoginComponent from '../../components/Login';

class Login extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = ({
        checking: true
      })
    }
    render() {
        return (
            <div>
              <Header title="登陆" />
              {
                this.state.checking
                ? <div>等待中...</div>
                : <div>展示登陆组件</div>
              }
            </div>
        )
    }
    componentDidMount(){
      this.doCheck();
    }

    //处理登陆成功之后的业务
    loginHandle(username){
      //保存用户名
      const action = this.props.userinfoAction;
      let userinfo = this.props.userinfo;
      userinfo.username = username;
      atcions.update(userinfo);

      //跳转链接
      const params = this.props.params;
      const router = params.router;
      if (router) {
        //跳转到指定页面
        hashHistory.push(router)
      }else {
        //跳转到默认页面，用户页面
        this.goUserPage();
      }
    }

    doCheck(){
      const userinfo = this.props.userinfo;
      if (userinfo.username) {
        //已经登陆
        this.goUserPage();
      }else {
        //尚未登陆
        this.setState({
          checking: false
        })
      }
    }
    goUserPage(){
      hashHistory.push('/User');
    }
}

//redux react 绑定
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
