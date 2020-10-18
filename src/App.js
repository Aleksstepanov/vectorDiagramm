import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Content from './components/Content/Content';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      menu: ['home', 'help', 'about']
    }
  }

  render() {
    const {menu} = this.state;
    return (
        <React.Fragment>
          <Header menu={menu}/>
          <Content />
        </React.Fragment>
    );
  }
}
