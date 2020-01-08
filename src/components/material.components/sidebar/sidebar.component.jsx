import React, { useEffect, useState } from 'react';
import './sidebar.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { sortArraysProducts } from '../../../pipes';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { saveSelectedProducts, saveSelectedTypeProducts } from '../../../redux/products/actions.products';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  list: {
    marginTop: '20px',
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

function Sidebar(props) {
    const { allArrayProducts, saveSelectedProducts, history, saveSelectedTypeProducts } = props;
    const [mp3, mp3Handler] = useState('');
    const [phones, phonesHandler] = useState('');
    const [headphones, headphonesHandler] = useState('');
    const [favorite, setFavorite] = useState(false);
    const classes = useStyles();
    const [state, setState] = useState({ left: false });

    useEffect(()=>{
        if(!allArrayProducts.length){
            return
        }
        const products = getSelectedCategory();
        let res = sortArraysProducts(allArrayProducts, products);
        saveSelectedProducts(res)
    }, [mp3, phones, headphones]);

    useEffect(()=>{
        if(history.location.pathname === '/'){
            setFavorite(false)
        }
        if(history.location.pathname === '/favorite'){
            setFavorite(true)
        }
    })

    const getSelectedCategory = () => {
        const celectedProducts = [{mp3}, {phones}, {headphones}];
        const products = [];
        celectedProducts.forEach(el=>{
            for(let i in el){
                if(el[i]){
                    products.push(i)
                }
            }
        })
        saveSelectedTypeProducts(products)//to redux
        return products
    }

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown') {
            return;
        }
        setState({ ...state, [side]: open });
    };

    const handlerSelectProducts = (variable, handler) => {
        variable ? handler('') : handler('selected');
    }

    const toggleClass = (e) => {
        let text = e.currentTarget.firstChild.firstChild.textContent;
        handlerCaseSelectedProducts(text)
    }

    const handlerCaseSelectedProducts = (text) => {
        switch(text){
            case 'mp3':
                return handlerSelectProducts(mp3, mp3Handler)
            case 'headphones':
                return handlerSelectProducts(headphones, headphonesHandler)
            case 'phones':
                return handlerSelectProducts(phones, phonesHandler)
            default:
                return
        }
    }

    const handleFavorite = () => {
        if(favorite){
            setFavorite(false)
            history.push('/')
        }else{
            setFavorite(true)
            history.push('/favorite')
        }
    }

    const sideList = () => (
        <div className={classes.list}>
        <List>
            <span className='sidebar-text'>Выбрать товар:</span>
            <ListItem button onClick={(e)=>toggleClass(e)} className={ phones ? 'selected' : ''}>
                <ListItemText  primary={'phones'} />
            </ListItem>
            <ListItem button onClick={(e)=>toggleClass(e)} className={ headphones ? 'selected' : ''}>
                <ListItemText primary={'headphones'}/>
            </ListItem>
            <ListItem button onClick={(e)=>toggleClass(e)} className={ mp3 ? 'selected' : ''}>
                <ListItemText primary={'mp3'} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <Switch
                checked={favorite}
                onChange={()=>handleFavorite()}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            /> Show Favorites
        </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><FormatAlignJustifyIcon /></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList()}
            </Drawer>
        </div>
    );
}

Sidebar.propTypes = { 
    history: PropTypes.object, 
    saveSelectedProducts: PropTypes.func,
    saveSelectedTypeProducts: PropTypes.func,
    allArrayProducts: PropTypes.array
}

const mapStateToProps = (state) => ({
    allArrayProducts: state.products.allArrayProducts,
});
  
export default connect(
    mapStateToProps,
    { saveSelectedProducts, saveSelectedTypeProducts }
)(Sidebar);