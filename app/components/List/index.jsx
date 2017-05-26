import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './Item';

import './style.less';

class ListComponent extends React.Component {
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return(
      //对数据进行遍历，用 Item 组件展示数据
      <div className="list-container">
        {this.props.data.map((item, index) => {
          return <Item key={index} data={item}/>
        })}
      </div>
    )
  }
}

export default ListComponent;
