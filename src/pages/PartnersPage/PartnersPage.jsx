import React from 'react';
import PageHeading from '../../components/Headings/PageHeading/PageHeading';
import CategoryItems from './CategoryItems/CategoryItems';
import CategoryPartnersList from './CategoryPartnersList/CategoryPartnersList';
import s from './PartnersPage.module.scss';
import SpasiboTypeToggle from './SpasiboTypeToggle/SpasiboTypeToggle';



function PartnersPage(props){
  return (
    <div className="container">
      <PageHeading className={s.pageTitle}>Партнеры и предложения</PageHeading>

      <ul className={s.categoryList}>
        <CategoryItems/>
      </ul>

      <SpasiboTypeToggle/>

      <CategoryPartnersList/>
    </div>
  )
};

export default PartnersPage;