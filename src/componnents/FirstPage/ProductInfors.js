import React, { Component } from 'react';

class ProductInfors extends Component {

    constructor(props) {
        super(props);

    }



    render() {

        let { viewDetailShow } = this.props;
        return (
            <div className="modal fade product_view" id="product_view">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a href="#" data-dismiss="modal" className="class pull-right"><span className="glyphicon glyphicon-remove" /></a>
                            <h3 className="modal-title">{viewDetailShow.name}</h3>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card"> <img src="https://i.imgur.com/eu74Mje.jpg" className="card-img-top" />
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between"> <span className="font-weight-bold"></span> <span className="font-weight-bold"></span> </div>
                                            <p className="card-text mb-1 mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <div className="d-flex align-items-center flex-row"> <img src="https://i.imgur.com/e9VnSng.png" width={20} /> <span className="guarantee">2 Years Guarantee</span> </div>
                                        </div>
                                        <hr />
                                        <div className="card-body">
                                            <div className="text-right buttons">
                                                <button className="btn btn-dark">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfors;
