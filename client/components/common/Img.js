import React from 'react';
import errorImage from '../../images/error-image.png';

const img_props_default = {
  alt: "",
  onError: (e) => { e.target.onerror = null; e.target.src = errorImage }
}

export default function Img(props) {
  let img_props = { ...img_props_default, ...props };
  return (
    <img {...img_props} alt={img_props.alt} />
  )
}