import s from './WhiteButton.module.scss';
import cs from '../Common.module.scss';



function WhiteButton({className, children, ...props}){
  return (
    <button 
      {...props} 
      className={cs.commonBtn + " " + s.btn + " " + className}
    >{children}</button>
  )
};

export default WhiteButton;