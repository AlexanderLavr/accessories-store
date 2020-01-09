import React from 'react';
import './table.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import { getId, getItemStore, countTotalPrice, handlerAdd, handlerSubtract, handlerDelete } from '../../../pipes';
import { changeCount } from '../../../redux/cart/actions.cart';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function CartTable(props) {
    const { changeCount } = props;
    let arrayProducts = getItemStore('cart')
    const classes = useStyles();

    const buttonAdd = (e) => mainHandler(e, handlerAdd);
    const buttonSubtract = (e) => mainHandler(e, handlerSubtract);
    const buttonDelete = (e) => mainHandler(e, handlerDelete);
        
    const mainHandler = (e, handler) => {
        const element = e.currentTarget;
        let idElement = getId(element);
        let cartCount = handler(idElement, arrayProducts)
        changeCount(cartCount)
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название продукта</TableCell>
                            <TableCell align="right">Колличество</TableCell>
                            <TableCell align="right">Цена</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arrayProducts.map((el, index) => (
                            <TableRow key={`row${index}`}>
                                <TableCell component="th" scope="row">
                                {el.title}
                                </TableCell>
                                <TableCell align="right">{`${el.count} (из ${el.amount})`}</TableCell>
                                <TableCell align="right">{el.price}</TableCell>
                                <TableCell align="right">
                                    <Fab size="small" color="primary" id={`ad${el.id}`} onClick={(e)=>buttonAdd(e)}>
                                        <AddIcon />
                                    </Fab>
                                </TableCell>
                                <TableCell align="right">
                                    <Fab size="small" color="primary" id={`su${el.id}`} onClick={(e)=>buttonSubtract(e)}>
                                        <RemoveIcon />
                                    </Fab>
                                </TableCell>
                                <TableCell align="right">
                                    <Fab size="small" color="secondary" id={`de${el.id}`}onClick={(e)=>buttonDelete(e)}>
                                        <DeleteIcon />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="total-count">{`Общая стоимость: ${countTotalPrice(arrayProducts)} грн.`}</div>
        </div>
    );
}

CartTable.propTypes = { 
    changeCount: PropTypes.func
}

const mapStateToProps = (state) => ({
    count: state.cart.count
});
  
export default connect(
    mapStateToProps,
    { changeCount }
)(CartTable);

