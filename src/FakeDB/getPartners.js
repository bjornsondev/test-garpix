import mVideoLogo from '../assets/images/mVideoLogo.png';
import burgerKingLogo from '../assets/images/burgerKingLogo.png';
import fiveLogo from '../assets/images/fiveLogo.png';
import republiс from '../assets/images/republiс.png';
import megaphoneLogo from '../assets/images/megaphoneLogo.png';
import iviLogo from '../assets/images/iviLogo.png';
import blessYouLogo from '../assets/images/blessYouLogo.png';
import litResLogo from '../assets/images/litResLogo.png';
import dishCenter from '../assets/images/dishCenter.png';
import lamodaLogo from '../assets/images/lamodaLogo.png';
import myToys from '../assets/images/myToys.png';
import ozonLogo from '../assets/images/ozonLogo.png';
import tezLogo from '../assets/images/tezLogo.png';
import bookingCar from '../assets/images/bookingCar.png';
import sberbankInsurenceLogo from '../assets/images/sberbankInsurenceLogo.png';
import tripsterLogo from '../assets/images/tripsterLogo.png';

export default function getPartners() {
  return [
    {
      name: "М.Видео",
      category: ["shop", "tech"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: mVideoLogo,
      discount: "от 2%"
    },
    {
      name: "Burger King",
      category: ["food", "popular"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: burgerKingLogo,
      discount: "1.5%"
    },
    {
      name: "Пятёрочка",
      category: ["shop", "popular"],
      isReturnSpasibo: false,
      isTakeInSpasibo: true,
      logoUrl: fiveLogo,
      discount: "1.5%"
    },
    {
      name: "Республика",
      category: ["shop", "rest", "tech"],
      isReturnSpasibo: false,
      isTakeInSpasibo: true,
      logoUrl: republiс,
      discount: "от 2.5%"
    },
    {
      name: "Мегафон",
      category: ["popular"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: megaphoneLogo,
      discount: "3%"
    },
    {
      name: "IVI",
      category: ["cinema", "popular"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: iviLogo,
      discount: "4%"
    },
    {
      name: "Будь Здоров",
      category: ["beauty", "zoo"],
      isReturnSpasibo: true,
      isTakeInSpasibo: true,
      logoUrl: blessYouLogo,
      discount: "2%"
    },
    {
      name: "ЛитРес",
      category: ["rest", "shop"],
      isReturnSpasibo: true,
      isTakeInSpasibo: true,
      logoUrl: litResLogo,
      discount: "1%"
    },
    {
      name: "Посуда Центр",
      category: ["shop"],
      isReturnSpasibo: false,
      isTakeInSpasibo: true,
      logoUrl: dishCenter,
      discount: "от 1.5%"
    },
    {
      name: "Lamoda",
      category: ["shop"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: lamodaLogo,
      discount: "4%"
    },
    {
      name: "My Toys",
      category: ["taxi"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: myToys,
      discount: "4%"
    },
    {
      name: "Ozon",
      category: ["shop", "popular"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: ozonLogo,
      discount: "2%"
    },
    {
      name: "Tez",
      category: ["travel"],
      isReturnSpasibo: false,
      isTakeInSpasibo: true,
      logoUrl: tezLogo,
      discount: "4%"
    },
    {
      name: "Booking Car",
      category: ["travel", "rest", "taxi", "zoo", "sport"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: bookingCar,
      discount: "5%"
    },
    {
      name: "Сбербанк Страхование",
      category: ["popular"],
      isReturnSpasibo: true,
      isTakeInSpasibo: false,
      logoUrl: sberbankInsurenceLogo,
      discount: "4%"
    },
    {
      name: "Tripster",
      category: ["popular"],
      isReturnSpasibo: false,
      isTakeInSpasibo: true,
      logoUrl: tripsterLogo,
      discount: "3%"
    },
    {
      name: "MOCK",
      category: ["popular", "shop", "food", "taxi", "beauty", "tech", "zoo", "cinema", "travel", "sport", "rest"],
      isReturnSpasibo: true,
      isTakeInSpasibo: true,
      logoUrl: "https://ceitas.com/wp-content/plugins/woocommerce/assets/images/placeholder.png",
      discount: "3%"
    }
  ];
}
