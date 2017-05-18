import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import HomeHeader from '../../components/HomeHeader';
import Carousel from '../../components/Category/index.jsx';
class Home extends React.Component {
  constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  render(){
    return(
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Carousel />
      </div>
    )
  }
}

function mapStateToProps(state){
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
)(Home);
