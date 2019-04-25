import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle,
    Container } from 'reactstrap';

export default class Counter extends Component {
    state = {
        qty: 0,
    };
    
    tambah = () => {
        this.setState({
            qty: this.state.qty + 1,
        });
      this.props.tambahTotalHarga(this.props.harga);
    };
    kurang = () => {
      if(this.state.qty === 0 ) {
          return;
      }
        this.setState({
            qty: this.state.qty - 1,
        });
        this.props.kurangTotalHarga(this.props.harga);
    };
  render() {
    return (
      <div style={{textAlign:"center", padding:"10px", margin:'0px'}}>
        <Container>
          <Card style={{width:"270px"}} >
            <CardImg style={{height:"210px"}} src={this.props.gambar} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ fontSize: '30px',fontStyle:"bold" }}>{this.props.menu}</CardTitle>
                        <hr></hr>
                        <p>Harga: {this.props.harga}</p>
                        <p style={{ fontSize: '24px'}}> Banyak Pesanan</p>
                        <h1>{this.state.qty}</h1>
                        <button type="button" className="btn btn-warning" onClick={this.kurang}>-</button>{' '}
                        <button type="button" class="btn btn-success" onClick={this.tambah}>+</button>
                    </CardBody>
        </Card>
        </Container>
      </div>
    )
  }
};
