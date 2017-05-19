import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Header extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h1>Header</h1>
        )
    }
}

export default Header;
