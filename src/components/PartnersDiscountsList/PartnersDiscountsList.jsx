import React from 'react';
import s from './PartnersDiscountsList.module.scss';




function PartnersDiscountsList({className, items, label}){
  const listItems = items.map( (e, i) => 
    <li className={s.item} key={i}>
      <img src={e.imgUrl} alt={e.name}/>
      {e.discount ? <span className={s.itemDiscount}> {e.discount} </span> : null}
    </li>  
  )
  return (
    <div className={s.wrapper + " " + className}>
      <ul className={s.list}>
        {listItems}
      </ul>
      <div className={s.text}>
        {label}
      </div>
    </div>
  )
};

export default PartnersDiscountsList;