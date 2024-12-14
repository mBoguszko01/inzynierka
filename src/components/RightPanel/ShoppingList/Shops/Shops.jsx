import { useState } from "react";
import Shop from "./Shop";
import DialogCoupons from "../../../Dialogs/DialogCoupons/DialogCoupons";
import "./Shops.css";
//"Logotypy prezentowane na stronie są własnością odpowiednich firm i zostały użyte wyłącznie w celu prezentacji ich ofert promocyjnych."
const lidlAllCoupons = [
  { name: "Free-range eggs 10 pcs",
    manufacturer: "Fermy Drobiu Woźniak",
    store: "Lidl",
    price_before_discount: 9.99,
    price_after_discount: 8.69,
    expiration_date: "2024-12-12",
    category: "pet products"
  },
  { name: "Free-range eggs 10 pcs",
    manufacturer: "Fermy Drobiu Woźniak",
    store: "Lidl",
    price_before_discount: 9.99,
    price_after_discount: 8.69,
    expiration_date: "2024-12-12",
    category: "pet products"
  },
  { name: "Free-range eggs 10 pcs",
    manufacturer: "Fermy Drobiu Woźniak",
    store: "Lidl",
    price_before_discount: 9.99,
    price_after_discount: 8.69,
    expiration_date: "2024-12-12",
    category: "pet products"
  },
  { name: "Free-range eggs 10 pcs",
    manufacturer: "Fermy Drobiu Woźniak",
    store: "Lidl",
    price_before_discount: 9.99,
    price_after_discount: 8.69,
    expiration_date: "2024-12-12",
    category: "pet products"
  },
];
const lidlSuggestedCoupons = [{ name: "Free-range eggs 10 pcs",
        manufacturer: "Fermy Drobiu Woźniak",
        store: "Lidl",
        price_before_discount: 9.99,
        price_after_discount: 8.69,
        expiration_date: "2024-12-12",
        category: "Dairy Products"
      },
      { name: "Free-range eggs 10 pcs",
        manufacturer: "Fermy Drobiu Woźniak",
        store: "Lidl",
        price_before_discount: 9.99,
        price_after_discount: 8.69,
        expiration_date: "2024-12-12",
        category: "dry products"
      }];
const biedronkaAllCoupons = [];
const biedronkaSuggestedCoupons = [];
const carrefourAllCoupons = [
  { name: "pomidory", price: 4.99 },
  { name: "ogorki", price: 3.99 },
];
const carrefourSuggestedCoupons = [
  { name: "pomidory", price: 4.99 },
  { name: "ogorki", price: 3.99 },
];




const Shops = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const showDialog = (shopName) => {
        if (shopName === "Lidl") {
          setIsDialogOpen(true);
        } else if (shopName === "Biedronka") {
          console.log(biedronkaSuggestedCoupons);
        } else {
          console.log(carrefourSuggestedCoupons);
        }
      };
  return (
    <>
      {isDialogOpen && (
        <DialogCoupons
          suggestedCoupons={lidlSuggestedCoupons}
          allCoupons={lidlAllCoupons}
          isDialogOpen={isDialogOpen}
          handleClose={()=>setIsDialogOpen(false)}
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
