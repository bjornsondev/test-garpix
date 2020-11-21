
import logo from '../../assets/images/sberlogo.svg';
import gpLink from '../../assets/images/gpLink.png';
import asLink from '../../assets/images/asLink.png';
import ok from '../../assets/images/ok.svg';
import fb from '../../assets/images/fb.svg';
import vk from '../../assets/images/vk.svg';
import inst from '../../assets/images/inst.svg';

import s from './Footer.module.scss';

import SiteNavLinks from '../SiteNavLinks/SiteNavLinks';

function Footer(){
  return (
    <footer className={s.footer}>
      <div className="container">

        <div className={s.footerLeft}>
          <span className={s.footerHotPhone}>900</span>
          <span className={s.footerFaintText}>По России бесплатно</span> 
          <img src={logo} alt="Сбербанк" className={s.footerSberLogo}/>
          <span className={s.footerFaintText}>&copy; 1997-2019 ПАО Сбербанк</span>
        </div>

        <div className={s.footerRight}>
          <ul className={s.footerSiteNav}>
            <SiteNavLinks className={s.footerLink}/>
          </ul>

          <div className={s.footerSocialLinks}>
            <div className={s.footerPlatforms}>
              <img src={gpLink} alt="Приложение в Google Play"/>
              <img src={asLink} alt="Приложение в App Store"/> {/* Ну тут линки должны быть */}
            </div>

            <div className={s.footerSocials}>
              <img src={ok} alt="Одноклассники"/> {/* И тут */}
              <img src={fb} alt="FaceBook"/>
              <img src={vk} alt="Вконтакте"/>
              <img src={inst} alt="Инстаграм"/>
            </div>
          </div>

          <p className={s.footerFaintText}>
            Политика АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка» 
          </p>
        </div>
      </div>
      {console.log(`
                                       ／＞_____/＞
                              　　　　　| 　_　 _ | 
                              　 　　　／  ミ＿x ノ 
                              　　 　 /　　　　 |  - Опять баги чтоли?... Уже бужу его...
                              　　　 /　 ヽ　　 ﾉ 
                              　 　 │　　 |　|　|
                              　／￣|　　 |　|　|
                              　| (￣ヽ＿_ヽ_)__)
                              　＼二つ`)}
    </footer>
  )
};

export default Footer;