import s from './PartnerCard.module.scss';

function PartnerCard({ className, discount, logo, name, isTakeInType, isUl = false }){
  const Card = isUl ? "li" : "div";

  return (
    <>
      <Card className={s.card + " " + className}>
          {
            !isTakeInType 
            ? <p className={s.cardTypeText}>
                <span className={s.cardDiscount}>{discount}</span> <br></br>
                Спасибо от суммы покупки
              </p>
            : <p className={s.cardTypeText + " isTakeIn"}>
                Принимают Спасибо
              </p>  
          }

          <img src={logo} alt={name} className={s.cardImg}/>

          <h3 className={s.cardName}>{name}</h3>
      </Card>
    </>
  )
};

export default PartnerCard;