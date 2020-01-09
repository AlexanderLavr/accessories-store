import React from 'react';
import './favorite.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFavoriteProducts } from '../../pipes';
import { doProducts } from '../../redux/products/actions.products';
import { MediaCard } from '../material.components';




class Favorite extends React.Component{
    render(){
        const { allArrayProducts, history, doProducts} = this.props;
        const favorite = getFavoriteProducts(allArrayProducts);
        if(!allArrayProducts.length){
            history.push('/')
        }
        if(favorite.length){
            return (
                <div className="container-faworite">
                    {favorite.map((element, index)=>{
                        return  <MediaCard key={`card${index}`} data={element} doProducts={doProducts} /> 
                    })}
                </div>
            )
        }else{
            return <h1 className="empty">Ничего не выбранно!</h1>
        }
    }
}

Favorite.propTypes = { 
    history: PropTypes.object, 
    doProducts: PropTypes.func,
    allArrayProducts: PropTypes.array
}

const mapStateToProps = (state) => ({
    allArrayProducts: state.products.allArrayProducts
});
  
export default connect(
    mapStateToProps,
    { doProducts }
)(Favorite);