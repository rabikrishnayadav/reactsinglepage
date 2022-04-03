import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
            <img src={props.imgsrc} class="card-img-top" alt={props.altname} />
                <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text">{props.desc}</p>
                    <NavLink to={props.link} className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    </>
  );
}

export default Card;