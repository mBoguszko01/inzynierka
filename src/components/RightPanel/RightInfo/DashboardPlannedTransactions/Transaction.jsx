import {
  mdiNetflix,
  mdiSpotify,
  mdiYoutube,
  mdiSilverwareForkKnife,
  mdiWeightLifter,
  mdiCar,
  mdiBus,
  mdiTrain,
  mdiAirplane,
  mdiGasStation,
  mdiHome,
  mdiWater,
  mdiLightbulb,
  mdiPhone,
  mdiHospital,
  mdiPill,
  mdiGift,
  mdiCreditCard,
  mdiBank,
  mdiMovie,
  mdiCurrencyUsd,
  mdiShopping,
  mdiFood,
  mdiCoffee,
  mdiPizza,
  mdiHamburger,
  mdiBeer,
  mdiGlassWine,
  mdiTaxi,
  mdiBicycle,
  mdiMotorbike,
  mdiShipWheel,
  mdiSchool,
  mdiBookOpen,
  mdiGamepad,
  mdiMusic,
  mdiTelevision,
  mdiLaptop,
  mdiCellphone,
  mdiWifi,
  mdiTools,
  mdiHammerWrench,
  mdiHeart,
  mdiStar,
  mdiPalette,
  mdiCamera,
  mdiBriefcase,
  mdiChartLine,
  mdiCart,
  mdiTag,
  mdiTicket,
  mdiUmbrella,
  mdiWeatherSunny,
  mdiWeatherRainy,
  mdiSnowflake,
} from "@mdi/js";
import Icon from "@mdi/react";

const iconMap = {
  mdiNetflix,
  mdiSpotify,
  mdiYoutube,
  mdiSilverwareForkKnife,
  mdiCart,
  mdiGasStation,
  mdiCar,
  mdiBus,
  mdiTrain,
  mdiAirplane,
  mdiHome,
  mdiWater,
  mdiLightbulb,
  mdiPhone,
  mdiHospital,
  mdiPill,
  mdiCreditCard,
  mdiBank,
  mdiMovie,
  mdiMusic,
  mdiTelevision,
  mdiGamepad,
  mdiBookOpen,
  mdiSchool,
  mdiGift,
  mdiHeart,
  mdiTools,
  mdiUmbrella,
  mdiWeatherSunny,
  mdiCoffee,
  mdiBeer,
  mdiPizza,
  mdiHamburger,
  mdiGlassWine,
  mdiShopping,
  mdiTag,
  mdiTicket,
  mdiCurrencyUsd,
  mdiChartLine,
};
const Transaction = (props) => {
  const name = props.children;
  const { paymentDate, price, imgSrc } = props;

  const iconPath = iconMap[imgSrc] || null;

  return (
    <div className="transaction-container">
      <Icon path={iconPath} size={1.5} />
      <div className="transaction-text-info-container">
        <span className="section-header">{name}</span>
        <div className="transaction-date-and-price">
          <span className="section-small-text">Payment {paymentDate}</span>
          <span className="section-small-text expense">-{price}$</span>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
