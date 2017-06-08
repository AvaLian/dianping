import React from 'react';
import './style.less';

class HomeAd extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    const data = this.props.data;
      return (
          <div id="home-ad">
            <h2>超值特惠</h2>
            <div className="ad-container clear-fix">
              {data.map((item, index) => {
                return(
                  <div className="ad-item float-left" key={index}>
                    <img src={item.img} alt={item.title}/>
                  </div>
                )
              })}
            </div>
          </div>
      )
  }
}

export default HomeAd;
