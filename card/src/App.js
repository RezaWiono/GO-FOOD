import React, { Component } from 'react'
import './App.css';
import Counter from './component/counter';
import Navbar from './component/navbar';
import { Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    makanan:[
      {
      nama:"Lumpia",
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIjiS4W3KE-1SmfpcPjZJxxvRW19Xp8XFOtCR7Di8QpLy5LV1"
    },
    {
      nama:"Tahu gimbal",
      gambar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9ZnAV3Mdp97uyluNl_YOnhd_GCjHDbAY091aCj84g272ARCXQ"
    },
    {
      nama:"Sate",
      gambar:"http://1.bp.blogspot.com/-rAzLFcbTXV8/Ve5eSxkRgRI/AAAAAAAABJg/4f9j73vt_4Y/s1600/Resep%2BSate%2BSapi%2BUngaran%2BKhas%2BSemarang.JPG"
    },
    {
      nama:"Gulai kambing",
      gambar:"https://panganansemarang.files.wordpress.com/2015/01/gulai-kambing-khas-semarang.jpg"
    }
  ]
  }
  render() {
    return (
      <div>
      <Navbar/>
      <p style={{textAlign:"center", fontSize:"42px"}}>Menu Makanan</p>
      <Row>
      {this.state.makanan.map(item=>(
        <Col xs="3">
        <Counter gambar={item.gambar} menu={item.nama} />
        </Col>
      ))}
      </Row>
      </div>
    );
  }
}

export default App;
