import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
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
import DialogUpdatePlannedTransaction from "../../Dialogs/DialogUpdatePlannedTransaction/DialogUpdatePlannedTransaction";
import DialogUpdateCategory from "../../Dialogs/DialogUpdateCategory/DialogUpdateCategory";
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
                  <td><Icon path={iconPath} size={1.2} style={{color:"#000"}}/></td>
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
