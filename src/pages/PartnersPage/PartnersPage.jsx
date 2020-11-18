import React from 'react';
import PageHeading from '../../components/Headings/PageHeading/PageHeading';
import CategoryItems from './CategoryItems/CategoryItems';
import s from './PartnersPage.module.scss';



function PartnersPage(props){
  return (
    <div className="container">
      <PageHeading className={s.pageTitle}>Партнеры и предложения</PageHeading>

      <ul className={s.categoryList}>
        <CategoryItems/>
      </ul>
    </div>
  )
};

export default PartnersPage;