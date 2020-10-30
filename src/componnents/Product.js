import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { product, viewDetail } = this.props;
        return (
            <div className="card"> <img src={product.image} className="card-img-top" />
                <div className="card-body">
                    <div className="d-flex justify-content-between"> <span className="font-weight-bold">{product.name}</span> <span className="font-weight-bold">{'$' + product.price}</span> </div>
                    <p className="card-text mb-1 mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex align-items-center flex-row"> <img src="https://i.imgur.com/e9VnSng.png" width={20} /> <span className="guarantee">2 Years Guarantee</span> </div>
                </div>
                <hr />
                <div className="card-body">
                    <div className="text-right buttons">
                        <button className="btn btn-outline-dark" data-toggle="modal" onClick={() => viewDetail(product)} data-target="#product_view" >More Details</button>
                        <button className="btn btn-dark">Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
