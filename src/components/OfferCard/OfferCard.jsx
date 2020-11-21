import s from './OfferCard.module.scss';



function OfferCard({className, bigImg, thumbnail, partnerName, 
                    text, isUl = false, isArticle = false}){
  const Card = isUl ? "li" : isArticle ? "article" : "div"; 
  
  return (
    <Card className={s.card + " " + className}>
      <img src={bigImg} alt={text}/>

      <div className={s.cardInfo + " clearfix"}>
        <img className={s.cardThumbnail} src={thumbnail} alt={partnerName}/>
        <h3 className={s.cardPartner}>{partnerName}</h3>
        <span className={s.cardText}>{text}</span>
      </div>
    </Card>
  )
};

export default OfferCard;