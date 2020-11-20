import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeading from '../../components/Headings/PageHeading/PageHeading';
import setSingleOfferPage from '../../store/actions/SingeOfferPage/setSingleOfferPage';
import PartnerInfoItems from './PartnerInfoItems/PartnerInfoItems';
import s from './SingleOfferPage.module.scss';


// Допустим
// У нас в админке есть редактор текста, и мы в нем будем вбивать содержимое,всякими кнопочками
// превращая его в списки или в болд/италик, или в ссылки и т.д. которое 
// превратится в хтмл код, и текст пришел к нам в виде этого хтмл кода

// Этот хтмл код мы будем вставлять в контейнер для текста
// Пока не знаю как работает это в админке, как узнаю уберу dangerouslySetInnerHTML
// Верстку делаем по тегам от селектора контейнера, т.к. нам не надо, чтоб в админке чел мучался
// И расставлял те классы, которые нам удобно :) Хотя думаю можно прописать это в тех самых
// кнопочках, которые оборачивают в список, и сразу же с классами, хммм....
// Но тогда там будет намного больше тяжелого кода, нежели если мы тут просто зададим
// Стили по не очень привычным селекторам

// Ну и страница с гет параметров будет генерироваться разумеется


function SingleOfferPage(props){

  const state = useSelector( state => state.singleOfferPage.currentOffer);
  const dispatch = useDispatch();
  

  useEffect( () => {
    dispatch(setSingleOfferPage());
  }, [])



  return (
    <div className={s.page + " container"}>
      <div className={s.breadcrumbs}>
        <span>Скидочные купоны</span> · <span>Развлечения</span>
      </div>

      <PageHeading className={s.heading}>{state.name}</PageHeading>

      <section className={s.partnerFullInfo}>
        <img src={state.img} alt={state.name}/>
        <p className={s.dateFromTo}>С {state.dateFrom} по {state.dateTo}</p>
        <div 
          className={s.content}
          dangerouslySetInnerHTML={{ __html: state.content }} 
        ></div> 
      </section>

      <div className={s.partnerInfo}>
        <img src={state.partnerThumb} alt={state.partnerName}/>
        <h3>{state.partnerName}</h3>
      </div>

      <ul className={s.partnerInfoList}>
        <PartnerInfoItems
          list={state.partnerInfoList}
          partnerName={state.partnerName}
          partnerThumb={state.partnerThumb}
        />
      </ul>

      <div className={s.yaMap}
            dangerouslySetInnerHTML={{__html: state.yaMapIframe}}
      ></div>
    </div>
  )
};

export default SingleOfferPage;