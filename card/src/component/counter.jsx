import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle, Button ,
    Container, Row, Col } from 'reactstrap';

export default class Counter extends Component {
    state = {
        number: 0,
        harga : 0,
        biaya : 10000*3
    };

    tambah = () => {
        this.setState(({ number,harga, biaya }) => ({
            number: number + 1,
            harga: harga + biaya
        }));
    };
    kurang = () => {
      var number = this.state.number;

      if (number > 0){
        this.setState(({ number, harga, biaya }) => ({
            number: number - 1,
            harga: harga - biaya
        }));
    }
    };
  render() {
    return (
      <div style={{textAlign:"center", padding:"10px", margin:'0px'}}>
        <Container>
          <Card style={{width:"270px"}} >
            <CardImg style={{height:"210px"}} src={this.props.gambar} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ fontSize: '35px',fontStyle:"bold" }}>{this.props.menu}</CardTitle>
                        <p>Harga : {this.state.harga}</p>
                        <p style={{ fontSize: '24px'}}>pesan berapa</p>
                        <h1>{this.state.number}</h1>
                        <button type="button" className="btn btn-danger" onClick={this.kurang}>Kurang</button>{' '}
                        <button type="button" class="btn btn-success" onClick={this.tambah}>Tambah</button>
                    </CardBody>
        </Card>
        </Container>
      </div>
    )
  }
};
