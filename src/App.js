import React from 'react';
import '../src/App.css'
import ToDo from './component/ToDo';
import Theme from '../src/context/Theme'
export default class App extends React.Component {
  render() {
    return (
        <>
          <Theme>
<ToDo/>

          </Theme>
        </>
    );
  }
}