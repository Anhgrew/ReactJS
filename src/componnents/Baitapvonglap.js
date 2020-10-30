import React, { Component } from 'react';
import Product from './Product';


class Baitapvonglap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productArr: [
                new Product(1, 'Iphone 11', 'data:image/jpeg;base64,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', 2000),
                new Product(2, 'Samsung A 71', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAQcqFmGovddmday79P00fEHOBUrmWOqCGgD-e4kKocuY_IESwUT8GAE_QNYU&usqp=CAc', 900),
                new Product(3, 'Iphone', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu1qAOoPmowNEiCvugfmzOtVTpUrxbe_hQrweZDA2wleFFui05yzWCGeq-gA&usqp=CAc', 2000)
            ]
        }
    }
    renderArr() {
        return this.state.productArr.map((product, index) =>
            (
                <tr key={index}>
                    <td><div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={product.image} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </td>
                </tr>
            )
        )
    }
    render() {
        return (

            <div>
                <div>
                    <table className="table table-responsive-sm table-dark table-hover text-center" >
                        <thead>
                            <tr><th>PRODUCT LIST</th></tr>
                        </thead>
                        <tbody>
                            {this.renderArr()}
                        </tbody>
                    </table>
                </div>



            </div>
        );
    }
}

export default Baitapvonglap;