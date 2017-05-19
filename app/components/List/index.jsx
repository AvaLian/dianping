import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

class ListComponent extends React.Component {
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    //取出 data
    const data = this.props.data;

    return(
      //对数据进行遍历，并且展示数据
      <div>
        {
          data.map((item, index) => {
          return <p key={index}>{item.title}</p>
        })
        }
      </div>
    )
  }
}

export default ListComponent;
