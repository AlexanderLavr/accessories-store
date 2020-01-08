import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getId, changeFavorite } from '../../../pipes';
import { doSelectedProducts } from '../../../redux/products/actions.products';//


function MediaCard(props) {
  const { data, doSelectedProducts, selectedTypeProducts } = props;
  const getFavorite = async (e) => {
    const element = e.currentTarget;
    let idElement = getId(element)
    await changeFavorite(idElement);
    await doSelectedProducts(selectedTypeProducts) 
  }
  
  return (
    <div className="container-card">
      <Card>
        <CardContent className="card-img" style={{backgroundImage:`url(${data.image})`}}></CardContent>
        <CardContent>
          <Typography className="card-title" gutterBottom variant="h5" component="h3">
            {data.title}
          </Typography>
          <Typography className="card-descripton" variant="body2" color="textSecondary" component="p">
            {data.description.substr(0, 200)+'...'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="card-button" size="small" color="secondary">
            To cart
          </Button>
          <Button className="card-button" size="small" color="secondary" id={`fa${data.id}`} onClick={(e)=>getFavorite(e)}>
            {data.isFavorite ? 'remove from favorites' : 'add to favorites'}
          </Button>
        </CardActions>
      </Card>
    </div> 
  )
}

MediaCard.propTypes = { 
  data: PropTypes.object, 
  doSelectedProducts: PropTypes.func,
  selectedTypeProducts: PropTypes.array
}

const mapStateToProps = (state) => ({
  selectedTypeProducts: state.products.selectedTypeProducts,
  selectedProducts: state.products.selectedProducts
});

export default connect(
  mapStateToProps,
  { doSelectedProducts }
)(MediaCard);
