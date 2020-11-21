import s from './PageHeading.module.scss';


function PageHeading({className, children, ...props}){
  return (
    <h1 {...props} className={s.pageHeading + " " + className}>{children}</h1>
  )
};

export default PageHeading;