import s from './SectionHeading.module.scss';


function SectionHeading({className, children, ...props}){
  return (
    <h2 {...props} className={s.sectionHeading + " " + className}>{children}</h2>
  )
};

export default SectionHeading;