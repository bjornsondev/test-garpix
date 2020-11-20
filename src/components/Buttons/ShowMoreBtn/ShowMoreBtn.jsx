import React from 'react';
import correctEndings from '../../../helpers/correctEndings';
import FilledButton from '../FilledButton/FilledButton';

function ShowMoreBtn({className, fullListLength, columns, isShowMore, setIsShowMore, postWords}){
  // postWords - массив слов, с разными окончаниями, смотреть работу функции correcEndings()

  const isBigList = fullListLength > +columns; 
  let remainder = fullListLength - +columns; 
  

  const showMore = () => {
    setIsShowMore(true)
  },
  showLess = () => {
    setIsShowMore(false)
  };
  
  return (
    isBigList 
    ? ( 
        !isShowMore && remainder >= 1
        ? <FilledButton className={className} onClick={showMore}>
            Еще {remainder} {correctEndings(remainder, postWords)}
          </FilledButton>
        : <FilledButton className={className} onClick={showLess}>
            Показать меньше
          </FilledButton>
      )
    : null
  )
};

export default ShowMoreBtn;