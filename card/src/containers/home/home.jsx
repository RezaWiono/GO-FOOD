import React, { Component } from 'react';
import Navbar from '../../component/navbar';
import {getData} from '../db'
import Carousel from '../../component/carousel';

export default class Home extends Component {
componentDidMount(){
  getData()
}

  render() {
    return (
      <div>
        <Navbar/>
        <Carousel />       
      </div>
    )
  }
};
