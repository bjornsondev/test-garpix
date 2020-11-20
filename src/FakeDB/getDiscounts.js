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

export default function getDiscounts() {
  return {
    discounts: [
      {name: "Бургер Кинг", imgUrl: burgerKingLogo},
      {name: "Пятерочка", imgUrl: fiveLogo},
      {name: "Республика", imgUrl: republiс},
      {name: "Мегафон", imgUrl: megaphoneLogo},
      {name: "Ivi", imgUrl: iviLogo}
    ],
    bigPercentage: [
      {name: "Будь Здоров", imgUrl: blessYouLogo, discount: "3%"},
      {name: "Пятерочка", imgUrl: fiveLogo, discount: "1.5%"},
      {name: "ЛитРес", imgUrl: litResLogo, discount: "5%"}
    ],
    coupons: [
      {name: "Посуда Центр", imgUrl: dishCenter},
      {name: "LaModa", imgUrl: lamodaLogo},
      {name: "My Toys", imgUrl: myToys}
    ],
    personal: [
      {name: "OZON", imgUrl: ozonLogo},
      {name: "Tez", imgUrl: tezLogo},
      {name: "Booking Car", imgUrl: bookingCar},
      {name: "Сбербанк Страхование", imgUrl: sberbankInsurenceLogo},
      {name: "Tripster", imgUrl: tripsterLogo}
    ]
  };
}

