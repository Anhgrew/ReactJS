import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import ProductList from './ProductList';
import ProductInfors from './ProductInfors';
class HomeLayout extends Component {

    render() {

        return (
            <div>
                <Header />
                <Slider />
                <ProductList />
                <Footer name={"--------------------------------------------------"} />
            </div>
        );
    }
}

export default HomeLayout;