import React from 'react';
import BaseForm from './base/BaseForm.jsx';
class F extends BaseForm {
  handleClick = () => {
    alert(JSON.stringify(this.state));
  }
}
class Demo extends React.Component {
  render() {
    const template = {
      actress: 'ACT',
      code: 'CODE',
      level: 'LV',
      t1:'测试属性1',
      t2:'测试属性2'
    };
    return (<div>
      <F template={template}/>
    </div>);
  }
}

export default Demo;
