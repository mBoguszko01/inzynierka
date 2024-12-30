import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Icon from "@mdi/react";
import { Icon as IconifyIcon } from "@iconify/react";
import { mdiPencilOutline } from "@mdi/js";
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
import DialogUpdatePlannedTransaction from "../../Dialogs/DialogUpdatePlannedTransaction/DialogUpdatePlannedTransaction";
import DialogUpdateCategory from "../../Dialogs/DialogUpdateCategory/DialogUpdateCategory";
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
const PlannedTransactions = () => {
  const assets = useSelector((state) => state.assets.totalAssets);
  const categories = useSelector((state) => state.categories.categoryList);
  const transactions = useSelector(
    (state) => state.plannedTransactions.plannedTransactionsList
  );
  const [limiter, setLimiter] = useState(50);
  const [selectedPlannedTransaction, setSelectedPlannedTransaction] =
    useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEdit = (transaction) => {
    setIsDialogOpen(true);
    setSelectedPlannedTransaction(transaction);
  };

  let limitedTransactions = [];
  limitedTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limiter);
  return (
    <>
      {isDialogOpen && (
        <DialogUpdatePlannedTransaction
          plannedTransaction={selectedPlannedTransaction}
          isDialogOpen={isDialogOpen}
          closeDialog={() => {
            setIsDialogOpen(false);
          }}
        />
      )}
      <table className="recent-transactions">
        <thead>
          <tr className="tr-headings">
            <th>Name</th>
            <th>Asset</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Repeat</th>
            <th>Logo</th>
            <th></th>
          </tr>
        </thead>
        {limitedTransactions.length > 0 && (
          <tbody>
            {limitedTransactions.map((transaction, index) => {
              
              const iconPath = iconMap[transaction.logo_url] || null;
              console.log(iconMap);
              return (
                <tr key={index}>
                  <td>
                    {transaction.transaction_name !== undefined
                      ? transaction.transaction_name
                      : transaction.name}
                  </td>
                  <td>
                    {transaction.asset_name !== undefined
                      ? transaction.asset_name
                      : assets.find(
                          (asset) => asset.id === transaction.asset_id
                        ).name}
                  </td>
                  <td>
                    {transaction.category_name !== undefined
                      ? transaction.category_name
                      : categories.find(
                          (category) => category.id === transaction.category_id
                        ).name}
                  </td>
                  <td>{transaction.price}</td>
                  <td>{transaction.date.substring(0, 10)}</td>
                  <td>
                    Every {transaction.repeat_value}{" "}
                    {transaction.repeat_value === 1
                      ? transaction.repeat_unit.substring(
                          0,
                          transaction.repeat_unit.length - 1
                        )
                      : transaction.repeat_unit}
                  </td>
                  <td>
                    <IconifyIcon
                      icon={iconPath}
                      size={1.2}
                      style={{ color: "#000" }}
                    />
                  </td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(transaction)}
                    >
                      <Icon path={mdiPencilOutline} size={0.8} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {limitedTransactions.length === 0 && (
        <span
          className="no-data-info"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          There is no data to display.
        </span>
      )}
    </>
  );
};
export default PlannedTransactions;
