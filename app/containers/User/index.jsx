import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import Header from '../../components/Header';

class User extends React.Component {
  constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  render() {
    const userinfo = this.props.userinfo;
    return (
        <div>
          <Header title="用户主页" backRouter="/" />
        </div>
    )
  }
  componentDidMount() {
      // 如果未登录，跳转到登录页面
      if (!this.props.userinfo.username) {
          hashHistory.push('/Login');
      }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
