import React from 'react';
import './spinner.scss';
import CircularProgress from '@material-ui/core/CircularProgress';


export function Spinner(){
    return (
      <div className="container-spinner">
        <CircularProgress color="secondary" className="spinner"/>
      </div>
    )
  }