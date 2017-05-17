import React from 'react';
import './style.less';

class HomeHeader extends React.Component {
  render(){
    return(
      <div className="clear-fix">
        <div className="float-left">
          <i></i>
          深圳
        </div>
        <div className="float-right">
          <i className="icon-user"></i>
        </div>
        <div>
          <i className="icon-search"></i>
          <input type="text"/>
        </div>
      </div>
    )
  }
}

export default HomeHeader
