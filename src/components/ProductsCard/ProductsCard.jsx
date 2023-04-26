import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const ProductsCard = ({data}) => {

  return (
    <div className="product-card">
        <img className="product-card__img" src={data.imgPath} alt={data.title} />
        <p className="product-card__title">{data.title}</p>
        <button className="product-card__button"><Link to={`/products/${data.id}`}>Ver Mais</Link></button>

    </div>
  )
}


export default ProductsCard