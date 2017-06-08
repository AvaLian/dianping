import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class LoadMore extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div className="load-more" ref="wrapper">
            {
              this.props.isLoadingMore
              ? <span>加载中...</span>
              : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
            }
          </div>
        )
    }
    loadMoreHandle(){
      //执行传递过来的 loadMoreData 函数
      this.props.loadMoreFn();
    }
    componentDidMount(){
      const loadMoreFn = this.props.loadMoreFn;
      //取得 DOM
      const wrapper = this.refs.wrapper;
      //截流,滚一下判断一下
      let timeoutId;
      function callback() {
        const top = wrapper.getBoundingClientRect().top;
        const windowHeight = window.screen.height;
        if (top && top < windowHeight) {
          //当 wrapper 已经被滚动到暴露在页面的可视范围之内时触发 loadMoreFn
          loadMoreFn();
        }
      };
      window.addEventListener('scroll',function () {
        if (this.props.isLoadingMore) {
          return;
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        //连续滚动的时候触发一次
        timeoutId = setTimeout(callback, 50);
    }.bind(this), false);
  }
}

export default LoadMore;
