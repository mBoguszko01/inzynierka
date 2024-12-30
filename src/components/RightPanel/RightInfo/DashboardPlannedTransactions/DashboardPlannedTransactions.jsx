import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../../../store/view";
import Transaction from "./Transaction";
import "./DashboardPlannedTransactions.css";

import netflixIcon from "@iconify/icons-logos/netflix-icon";
import youtubeIcon from "@iconify/icons-logos/youtube-icon";
import spotifyIcon from "@iconify/icons-logos/spotify-icon";
import appleIcon from "@iconify/icons-logos/apple";
import houseIcon from "@iconify/icons-ic/baseline-house";
import shoppingCartIcon from "@iconify/icons-ic/baseline-shopping-cart";
import localGasStationIcon from "@iconify/icons-ic/baseline-local-gas-station";
import directionsCarIcon from "@iconify/icons-ic/baseline-directions-car";
import directionsBusIcon from "@iconify/icons-ic/baseline-directions-bus";
import flightIcon from "@iconify/icons-ic/baseline-flight";
import restaurantIcon from "@iconify/icons-ic/baseline-restaurant";
import fastfoodIcon from "@iconify/icons-ic/baseline-fastfood";
import localBarIcon from "@iconify/icons-ic/baseline-local-bar";
import localCafeIcon from "@iconify/icons-ic/baseline-local-cafe";
import fitnessCenterIcon from "@iconify/icons-ic/baseline-fitness-center";
import medicalServicesIcon from "@iconify/icons-ic/baseline-medical-services";
import localHospitalIcon from "@iconify/icons-ic/baseline-local-hospital";
import creditCardIcon from "@iconify/icons-ic/baseline-credit-card";
import accountBalanceIcon from "@iconify/icons-ic/baseline-account-balance";
import movieIcon from "@iconify/icons-ic/baseline-movie";
import musicNoteIcon from "@iconify/icons-ic/baseline-music-note";
import tvIcon from "@iconify/icons-ic/baseline-tv";
import schoolIcon from "@iconify/icons-ic/baseline-school";
import bookIcon from "@iconify/icons-ic/baseline-book";
import giftIcon from "@iconify/icons-ic/baseline-card-giftcard";
import favoriteIcon from "@iconify/icons-ic/baseline-favorite";
import buildIcon from "@iconify/icons-ic/baseline-build";
import umbrellaIcon from "@iconify/icons-ic/baseline-beach-access";
import wifiIcon from "@iconify/icons-ic/baseline-wifi";
import phoneIcon from "@iconify/icons-ic/baseline-phone";
import lightbulbIcon from "@iconify/icons-ic/baseline-lightbulb";
import waterIcon from "@iconify/icons-ic/baseline-water-drop";
import currencyIcon from "@iconify/icons-ic/baseline-currency-exchange";
import chartIcon from "@iconify/icons-ic/baseline-bar-chart";
const iconMap = {
  logosNetflix: netflixIcon,
  logosYoutube: youtubeIcon,
  logosSpotify: spotifyIcon,
  logosApple: appleIcon,
  icHouse: houseIcon,
  icShoppingCart: shoppingCartIcon,
  icLocalGasStation: localGasStationIcon,
  icDirectionsCar: directionsCarIcon,
  icDirectionsBus: directionsBusIcon,
  icFlight: flightIcon,
  icRestaurant: restaurantIcon,
  icFastfood: fastfoodIcon,
  icLocalBar: localBarIcon,
  icLocalCafe: localCafeIcon,
  icFitnessCenter: fitnessCenterIcon,
  icMedicalServices: medicalServicesIcon,
  icLocalHospital: localHospitalIcon,
  icCreditCard: creditCardIcon,
  icAccountBalance: accountBalanceIcon,
  icMovie: movieIcon,
  icMusicNote: musicNoteIcon,
  icTv: tvIcon,
  icSchool: schoolIcon,
  icBook: bookIcon,
  icGift: giftIcon,
  icFavorite: favoriteIcon,
  icBuild: buildIcon,
  icUmbrella: umbrellaIcon,
  icWifi: wifiIcon,
  icPhone: phoneIcon,
  icLightbulb: lightbulbIcon,
  icWater: waterIcon,
  icCurrency: currencyIcon,
  icChart: chartIcon,
};

const DashboardPlannedTransactions = () => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const changeViewHandler = () => {
    dispatch(viewActions.changeView("Planned Transactions"));
  };

  const transactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );

  let totalPriceOfPlannedTransactions = 0;
  transactions.forEach((transaction) => {
    totalPriceOfPlannedTransactions += parseFloat(transaction.price);
  });

  let limitedTransactions = [];
  limitedTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  return (
    <div className="dashboard-planned-transactions-container">
      <span className="section-header" style={{marginTop:16}}>Planned Transactions</span>
      <span className="section-small-text" style={{ marginBottom: 7 }}>
        Total
      </span>
      <span className="expense section-large-text" style={{ marginBottom:0 }}>
        -{totalPriceOfPlannedTransactions}$
      </span>
      <div className="dashboard-transactions-container">
        {limitedTransactions.length > 0 &&  limitedTransactions.map((transaction, index) => (
          <>
            <Transaction
              key={index}
              paymentDate={transaction.date.substring(0, 10)}
              price={transaction.price}
              icon={iconMap[transaction.logo_url]}
            >
              {transaction.name}
            </Transaction>
          </>
        ))}
        {limitedTransactions.length === 0 && <span className="no-data-info">There is no data to display.</span>}
      </div>
      <div className="separator"></div>
      <div className="show-more">
        <button onClick={changeViewHandler}>Show more</button>
      </div>
    </div>
  );
};
export default DashboardPlannedTransactions;
