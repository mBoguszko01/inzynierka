import { useState } from "react";
import Shop from "./Shop";
import DialogCoupons from "../../../Dialogs/DialogCoupons/DialogCoupons";
import "./Shops.css";
import {useSelector} from "react-redux";
//"Logotypy prezentowane na stronie są własnością odpowiednich firm i zostały użyte wyłącznie w celu prezentacji ich ofert promocyjnych."



const Shops = (props) => {
  const { shoppingListId } = props;

  const lidlAllCoupons = (useSelector((state) => state.coupons.allLidlCoupons));
  const lidlSuggestedCoupons = (useSelector((state) => state.coupons.suggestedLidlCoupons));
  const biedronkaAllCoupons = (useSelector((state) => state.coupons.allBiedronkaCoupons));
  const biedronkaSuggestedCoupons = (useSelector((state) => state.coupons.suggestedBiedronkaCoupons));
  const carrefourAllCoupons = (useSelector((state) => state.coupons.allCarrefourCoupons));
  const carrefourSuggestedCoupons = (useSelector((state) => state.coupons.suggestedCarrefourCoupons));

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedShopAllCoupons, setSelectedShopAllCoupons] = useState(null);
  const [selectedShopSugestedCoupons, setSelectedShopSugestedCoupons] =
    useState(null);
  const showDialog = (shopName) => {
    if (shopName === "Lidl") {
      setIsDialogOpen(true);
      setSelectedShopAllCoupons(lidlAllCoupons);
      setSelectedShopSugestedCoupons(lidlSuggestedCoupons);
    } else if (shopName === "Biedronka") {
      setIsDialogOpen(true);
      setSelectedShopAllCoupons(biedronkaAllCoupons);
      setSelectedShopSugestedCoupons(biedronkaSuggestedCoupons);
    } else {
      setIsDialogOpen(true);
      setSelectedShopAllCoupons(carrefourAllCoupons);
      setSelectedShopSugestedCoupons(carrefourSuggestedCoupons);
    }
  };
  return (
    <>
      {isDialogOpen && (
        <DialogCoupons
          suggestedCoupons={selectedShopSugestedCoupons}
          allCoupons={selectedShopAllCoupons}
          isDialogOpen={isDialogOpen}
          handleClose={() => setIsDialogOpen(false)}
          shoppingListId={shoppingListId}
        />
      )}
      <div className="shops-wrapper">
        <div className="shops-container">
          <Shop
            name="Lidl"
            couponsAmount={lidlSuggestedCoupons.length}
            showDialog={showDialog}
          />
          <Shop
            name="Biedronka"
            couponsAmount={biedronkaSuggestedCoupons.length}
            showDialog={showDialog}
          />
          <Shop
            name="Carrefour"
            couponsAmount={carrefourSuggestedCoupons.length}
            showDialog={showDialog}
          />
        </div>
      </div>
    </>
  );
};
export default Shops;
