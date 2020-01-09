import React from 'react';
import './nav.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { Sidebar } from '../material.components';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { getItemStore } from '../../pipes';
import { changeCount } from '../../redux/cart/actions.cart';


class Nav extends React.Component{
    componentDidMount(){
        const { changeCount } = this.props;
        const count = getItemStore('count');
        if(count){
            changeCount(count)
        }
    }
    render(){
        const { history } = this.props;
        const pathName = history.location.pathname;
        return (
            <div className="container-nav">
                <div className="holder-nav">
                    <div className="sidebar-container">
                        <Sidebar history={history} />
                    </div>
                    <div className="router-container">
                        {pathName === '/cart' ? null : 
                        <IconButton 
                            color="primary" 
                            aria-label="add to shopping cart" 
                            onClick={()=>history.push('/cart')}
                        >
                            <Badge badgeContent={this.props.count} color="error">
                                <AddShoppingCartIcon />
                            </Badge>
                        </IconButton>}
                        <div>
                            <Link to='/'>На главную</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Nav.propTypes = { 
    history: PropTypes.object,
    count: PropTypes.number,
    changeCount: PropTypes.func
}

const mapStateToProps = (state) => ({
    count: state.cart.count
});
  
export default connect(
    mapStateToProps,
    { changeCount }
)(Nav);

