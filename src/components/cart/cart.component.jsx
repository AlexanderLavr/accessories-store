import React from 'react';
import './cart.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CartTable } from '../material.components'



class Cart extends React.Component{
    render(){
        const { count } = this.props;
        if(count){
            return (
                <div className="cart-container">
                    <CartTable props={this.props}/>
                </div>
            )
        }else{
            return <h1>Ничего не выбранно!</h1>
        }
    }
}
Cart.propTypes = { 
    count: PropTypes.number 
}

const mapStateToProps = (state) => ({
    count: state.cart.count
});
  
export default connect(
    mapStateToProps
)(Cart);