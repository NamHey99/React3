import Product from './components/Product';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onClick() {
    alert('This is component')
  }

  onAddProduct() {
    alert(this.refs.name.value)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Title</a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a>Home</a>
              </li>
              <li>
                <a>Link</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th> STT </th>
                  <th> Product Name</th>
                  <th> Price </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1 </td>
                  <td> Iphone 6 Plus </td>
                  <td> 
                    <span className="label label-success"> 15000000 </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td> 2 </td>
                  <td> Galaxy S7 </td>
                  <td> 
                    <span className="label label-success"> 18000000 </span>
                  </td>
                </tr>
              </tbody>
               <tbody>
                <tr>
                  <td> 3 </td>
                  <td> Oppo F1s </td>
                  <td> 
                    <span className="label label-success"> 6000000 </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                  <form action="" method="POST" role="form">
                <div className="form-group">
                  <label> Tên Sản Phẩm </label>
                  <input type="text" class="form-control" ref="name" />
                </div>
                <button type="submit" className="btn btn-primary" onClick = { this.onAddProduct } >
                  Lưu
                </button>
              </form>
                </div>
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Product 
                            
                             name = "Iphone 6 Plus 16GB"
                             price = "15000000 VND"
                             image = "https://cdn.xtmobile.vn/vnt_upload/product/03_2018/thumbs/600_ip6_silver_800x800_3.jpg"
                    />

                <Product 
                            
                             name = "Galaxy S7 32GB"
                             price = "18000000 VND"
                             image = "https://sieuthismartphone.com/data/product/medium/medium_yiz1608611730.jpg"
                    />

                <Product 
                            
                             name = "Oppo F1s 16GB"
                             price = "6000000 VND"
                             image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9amlwgNaBkd-ldtfGGqvYHDa8pEJgOHeysE5Vglz8g&s"
                    />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-success" onClick = { this.onClick } >Click Me</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
