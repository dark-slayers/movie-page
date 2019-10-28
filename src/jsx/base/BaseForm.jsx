import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput.jsx'
class BaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    for (var p in this.props.template) {
      this.state[p]='';
    }
  }
  handleTextChange = (event) => {
      event.preventDefault();
      var newState = {};
      const name = event.target.name;
      newState[name] = event.target.value;
      this.setState(newState);
  }
  render() {
    const pageStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    const selfObj = this;
    const ele = this.props.template;
    const children = Object.keys(this.state).map((name, index) => {
      return (<TextInput obj={selfObj} name={name} label={ele[name] + "："} key={index}/>);
    });
    return (<div style={pageStyle}>
      <div>
        {children}
        <div style={pageStyle}>
          <button onClick={this.handleClick}>提交</button>
        </div>
      </div>
    </div>);
  }
}

export default BaseForm;
