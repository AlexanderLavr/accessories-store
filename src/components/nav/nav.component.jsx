import React from 'react';
import './nav.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Sidebar } from '../material.components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';



export default class Nav extends React.Component{
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
                            <AddShoppingCartIcon />
                        </IconButton> }
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
    history: PropTypes.object
}

