import getDiscounts from '../../../FakeDB/getDiscounts';
import s from './PartnersDiscounts.module.scss';
import PartnersDiscountsList from '../../../components/PartnersDiscountsList/PartnersDiscountsList'


function PartnersDiscounts(){
  const discounts = getDiscounts(); // Надо экшн сделать как проснусь, доброе утро, ставь экшон
  return (
    <>
      <div className={s.longItems}>
        <PartnersDiscountsList 
          items={ discounts.discounts } 
          label="Скидки за бонусы" />
      </div>

      <div className={s.smallItems}>
        <PartnersDiscountsList 
          items={ discounts.bigPercentage } 
          label="Большой % начисления" 
          className={s.smallItem}/>

        <PartnersDiscountsList 
          items={ discounts.coupons } 
          label="Выгодные купоны" 
          className={s.smallItem}/>
      </div>

      <div className={s.longItems}>
        <PartnersDiscountsList 
          items={ discounts.personal } 
          label="Персональное исходя из трат" />
      </div>
    </>
  )
};

export default PartnersDiscounts;