import s from './StrokedButton.module.scss';
import cs from '../Common.module.scss';



function StrokedButton({className, children, ...props}){
  return (
    <button 
      {...props} 
      className={cs.commonBtn + " " + s.btn + " " + className}
    >{children}</button>
  )
};

export default StrokedButton;