import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import Header from '../../Components/Header';
class City extends React.Component {
  constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  render() {
      return (
          <div>
              <Header />
          </div>
      )
  }
}

// -------------------redux react 绑定--------------------

// function mapStateToProps(state) {
//     return {
//         userinfo: state.userinfo;
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
//     }
// }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(City)

export default City;
