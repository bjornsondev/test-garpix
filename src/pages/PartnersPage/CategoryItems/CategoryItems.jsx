import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import setCategoryList from '../../../store/actions/PartnersPage/setCategoryList';
import setCurrentCategory from '../../../store/actions/PartnersPage/setCurrentCategory';
import setFullCategoryList from '../../../store/actions/PartnersPage/setFullCategoryList';
import setShortCategoryList from '../../../store/actions/PartnersPage/setShortCategoryList';

import WhiteButton from '../../../components/Buttons/WhiteButton/WhiteButton';
import s from './CategoryItems.module.scss';

function CategoryItems(props){
  const state = useSelector( state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoryList())
  }, []);

  const setActiveCategory = (id) =>{
    dispatch(setCurrentCategory(id))
  },

  setFullCategory = () => {
    dispatch(setFullCategoryList())
  },

  setShortCategory = () => {
    dispatch(setShortCategoryList())
  };

  const items = state.categoryList.map( e => {
    let buttonActiveStyle = e.isCurrent ? "active" : "";
     return(
      <li key={e.id} className={s.categoryListItem}>
        <WhiteButton 
          onClick={() => setActiveCategory(e.id)} 
          className={buttonActiveStyle + " " + s.categoryListButton}
        >
          {e.name}
        </WhiteButton>
      </li>
    )
  })
  return (
    <>
      {items}
      <li key="1003" className={s.categoryListItem}>
      { !state.isFullCategoryList 
        ? <WhiteButton 
            onClick={setFullCategory} 
            className={s.categoryListButton}
          >⋯</WhiteButton>
        : <WhiteButton
            onClick={setShortCategory}
            className={s.categoryListButton}
          >╳</WhiteButton>
      }
      </li>
    </>
  );
};

export default CategoryItems;