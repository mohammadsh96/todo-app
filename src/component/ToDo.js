import React from 'react';
import Form from './form/form'
import Header from './basic/Header/Header'
import Footer from './basic/Footer/Footer'
import { ThemeContext } from '../context/Theme';

export default class  ToDo extends React.Component{
  static contextType = ThemeContext;

render(){

 return (
   <>
       <Header/>
        <div className={this.context.mode}>
          <Form/>
            </div>
      <Footer/>
    </>
  );


}
 
};

;