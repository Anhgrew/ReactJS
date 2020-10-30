import React, { Component } from 'react';
import Product from '../Product';
import ProductInfors from './ProductInfors';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewDetailShow: { id: '1', name: "Wood Sofa set-1", image: "https://i.imgur.com/SOMPPzU.jpg", price: 1000 },
            productArr: [
                { id: '1', name: "Wood Sofa set-1", image: "https://i.imgur.com/SOMPPzU.jpg", price: 1000 },
                { id: '2', name: "Wood Sofa set-2", image: "https://i.imgur.com/FhRHNGE.jpg", price: 2000 },
                { id: '3', name: "Wood Sofa set-3", image: "https://i.imgur.com/eu74Mje.jpg", price: 3000 },
                { id: '4', name: "Wood Sofa set-4", image: "https://i.imgur.com/441QtPc.jpg", price: 4000 },
                { id: '5', name: "Wood Sofa set-5", image: "https://i.imgur.com/hnX99Cr.jpg", price: 5000 },
                { id: '6', name: "Wood Sofa set-6", image: "https://i.imgur.com/SOMPPzU.jpg", price: 6000 }
            ]
        }
    }
    viewDetail = (product) => {
        this.setState({ viewDetailShow: product });
    }

    renderListProduct = () => {
        return this.state.productArr.map((product, index) => (
            <div className="col-md-4" key={index}>
                <Product product={product} viewDetail={this.viewDetail} />
            </div>
        ));
    }

    render() {
        let { viewDetailShow } = this.state;
        return (
            <div>
                <div className="container-fluid px-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
                        <div className="container-fluid d-flex"> <a className="navbar-brand" href="#">SiteBack</a>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation"> <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Couches</a> </li>
                                <li className="nav-item" role="presentation"> <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Chair</a> </li>
                                <li className="nav-item" role="presentation"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Dining</a> </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container-fluid mt-2 mb-5">
                    <div className="products">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> <span className="font-weight-bold text-uppercase">Luxury Couch</span>
                                    <div> <img src="https://img.icons8.com/windows/100/000000/list.png" width={30} /> <img src="https://img.icons8.com/ios-filled/100/000000/squared-menu.png" width={25} /> </div>
                                </div>
                                <div className="row g-3">
                                    {this.renderListProduct()}
                                </div>

                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                {/*Chairs*/}
                                <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> <span className="font-weight-bold text-uppercase">Luxury Chairs</span>
                                    <div> <img src="https://img.icons8.com/windows/100/000000/list.png" width={30} /> <img src="https://img.icons8.com/ios-filled/100/000000/squared-menu.png" width={25} /> </div>
                                </div>
                                <div className="row g-3">

                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                {/*Dining*/}
                                <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> <span className="font-weight-bold text-uppercase">Luxury Dining</span>
                                    <div> <img src="https://img.icons8.com/windows/100/000000/list.png" width={30} /> <img src="https://img.icons8.com/ios-filled/100/000000/squared-menu.png" width={25} /> </div>
                                </div>
                                <div className="row g-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductInfors viewDetailShow={viewDetailShow} />
            </div>

        );
    }
}

export default ProductList;
