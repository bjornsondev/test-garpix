import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import setCategoryList from '../../../store/actions/PartnersPage/Category/setCategoryList';
import setCurrentCategory from '../../../store/actions/PartnersPage/Category/setCurrentCategory';

import s from './CategoryItems.module.scss';

import WhiteButton from '../../../components/Buttons/WhiteButton/WhiteButton';
import category from '../../../store/reducers/PartnersPage/category';



function CategoryItems(props){
  const state = useSelector( state => state.category);
  const dispatch = useDispatch();

  const [isFullCategories, setIsFullCategories] = useState(false);
  
  const setActiveCategory = (id, name) =>{
    dispatch(setCurrentCategory(id, name)); 
  };

  useEffect( () => {
    dispatch(setCategoryList(isFullCategories));
  }, [isFullCategories]);

  {/* Допустим в админке есть возможность выставлять самому первые 7 категорий
      ну для маркетинга мб нужен такой функционал, мы сначала получаем список
      этих категорий, он приходит как listShort допустим, при клике на точки, 
      мы получаем listFull, который уже разворачивает полный список категорий */}

  const items = state.categories.map( e => {
    let buttonActiveStyle = state.currentCategory === e.id ? "active" : "";
     return(
      <li key={e.id} className={s.categoriesItem}>
        <WhiteButton 
          onClick={() => setActiveCategory(e.id, e.name)} 
          className={buttonActiveStyle + " " + s.categoriesButton}
        >{e.name}</WhiteButton>
      </li>
    )
  })


  return (
    <>
      {items}
      
      <li key="showAll" className={s.categoriesItem}>
        { 
          !state.isFullCategories 
          ? <WhiteButton 
              onClick={() => setIsFullCategories(true)} 
              className={s.categoriesButton}
            >⋯</WhiteButton>

          : <WhiteButton
              onClick={() => setIsFullCategories(false)}
              className={s.categoriesButton + " " + s.categoriesShowLessButton}
            >╳</WhiteButton>
        }
      </li>
    </>
  );
};

export default CategoryItems;