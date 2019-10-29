import React from 'react';
import BaseForm from './base/BaseForm.jsx';
import DownloadDiv from './download/DownloadDiv.jsx';
class F extends BaseForm {
  handleClick = () => {
    alert(JSON.stringify(this.state));
  }
}
class Demo extends React.Component {
  render() {
    const vo = {
      "path": "E:\\dshell",
      "dirList": [
        "log", "news", "test_dir_1", "test_dir_2"
      ],
      "fileList": [
        "11.png",
        "A.class",
        "A.java",
        "B.class",
        "B.java",
        "C.class",
        "C.java",
        "ERROR.log",
        "in.txt",
        "in_1.txt",
        "output11.txt",
        "temp.png"
      ]
    }
    const template = {
      actress: 'ACT',
      code: 'CODE',
      level: 'LV',
      t1: '测试属性1',
      t2: '测试属性2'
    };
    return (<div>
      <F template={template}/>
      <DownloadDiv vo={vo}/>
    </div>);
  }
}

export default Demo;
