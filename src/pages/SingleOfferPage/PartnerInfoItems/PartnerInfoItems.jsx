import s from './PartnerInfoItems.module.scss';



function PartnerInfoItems({list, partnerThumb, partnerName }){
  
  return list.map( (e, i) => {
    return (
        <li key={i} className={s.item}>
          <img src={partnerThumb} alt={partnerName} className={s.thumb}/>

          <div>
            <span>{e.address}</span>

            <p>
              <span className={s.metroStation1}>{e.metroStation1}</span>
              <span className={s.metroStation2}>{e.metroStation2}</span>
            </p>

            <span className={s.partnerInfoString}>{e.tel}</span>
            <span className={s.partnerInfoString}>{e.shedule}</span>

            <a 
              href={e.partnerSiteLink} 
              className={s.partnerSiteLink}
            >{e.partnerSiteName}</a>
            
            <a 
              href={e.yaMapLink} 
              className={s.yaMapLink}
            >Проложить маршрут</a>
          </div>
        </li>
      )
    }
  );
};

export default PartnerInfoItems;