import React from 'react';
import { useSelector } from 'react-redux';
import PageHeading from '../../components/Headings/PageHeading/PageHeading';
import SectionHeading from '../../components/Headings/SectionHeading/SectionHeading';
import PartnersDiscounts from './PartnersDiscounts/PartnersDiscounts';
import CategoryItems from './CategoryItems/CategoryItems';
import CategoryPartnersList from './CategoryPartnersList/CategoryPartnersList';
import OffersList from './OffersList/OffersList';
import s from './PartnersPage.module.scss';
import SpasiboTypeToggle from './SpasiboTypeToggle/SpasiboTypeToggle';



function PartnersPage(props){
  const state = useSelector(state => state);

  return (
    <div className="container">
      <section className="categories">
       <PageHeading className={s.pageTitle}>Партнеры и предложения</PageHeading>

        <ul className={s.categoryList}>
          <CategoryItems/>
        </ul>

        <SpasiboTypeToggle/>

        <CategoryPartnersList/>
      </section>

      <section className={s.offersList}>
        <SectionHeading className={s.offersHeading}>
          3 предложения в категории «{state.category.currentCategoryName}»
        </SectionHeading>
        <OffersList/>
      </section>

      <section className="partnersDiscounts">
        <PartnersDiscounts/>
      </section>
    </div>
  )
};

export default PartnersPage;