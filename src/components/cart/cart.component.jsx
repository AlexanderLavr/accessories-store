import React from 'react';
import './cart.scss';
import PropTypes from 'prop-types';
import { setItemStore, getItemStore } from '../../pipes';


export default class Cart extends React.Component{
    state = {
    }
    render(){
       
        
        return (
            <div className="">

            </div>
        )
    }
}
Cart.propTypes = { 
    history: PropTypes.object, 
    doProducts: PropTypes.func,
    allArrayProducts: PropTypes.array
}

// const mapStateToProps = (state) => ({
//     allArrayProducts: state.products.allArrayProducts,
//     // selectedProducts: state.products.selectedProducts
// });
  
// export default connect(
//     mapStateToProps,
//     { doProducts }
// )(Favorite);