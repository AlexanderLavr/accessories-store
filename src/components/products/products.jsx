import React from 'react';
import './products.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner, MediaCard } from '../material.components';
import { doProducts, doSelectedProducts } from '../../redux/products/actions.products';
import { initialStore } from '../../pipes';

class Products extends React.Component{
    componentDidMount(){
        const { doProducts, doSelectedProducts, selectedTypeProducts } = this.props;
        if(selectedTypeProducts.length){
            doSelectedProducts(selectedTypeProducts)
        }else{
            doProducts()
        }
        initialStore()
    }
    render(){
        const { selectedProducts, doProducts } = this.props;
        if(selectedProducts.length){
            return (
                <div className="container-products">
                    { selectedProducts.map((element, index)=>{
                        return  <MediaCard key={`card${index}`} data={element} doProducts={doProducts} /> 
                    })}
                </div>
            )
        }else{
            return <Spinner />
        }
    }
} 

Products.propTypes = { 
    selectedProducts: PropTypes.array, 
    selectedTypeProducts: PropTypes.array,
    doProducts: PropTypes.func,
    doSelectedProducts: PropTypes.func
}

const mapStateToProps = (state) => ({
    selectedProducts: state.products.selectedProducts,
    selectedTypeProducts: state.products.selectedTypeProducts
});
  
export default connect(
    mapStateToProps,
    { doProducts, doSelectedProducts }
)(Products);