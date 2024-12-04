import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../../store/view";
import { useState } from "react";
import "./RecentTransactions.css";
import Icon from '@mdi/react';
import { mdiPencilOutline } from '@mdi/js';

const RecentTransactions = (props) => {
  const dispatch = useDispatch();
  const currView = useSelector((state) => state.view);
  const categories = useSelector((state) => state.categories.categoryList);
  const assets = useSelector((state) => state.assets.totalAssets);
  const {limiter, transactions} = props;
  let limitedTransactions = [];
  limitedTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limiter);
  
  const changeViewHandler = () => {
    dispatch(viewActions.changeView("Transactions"));
  };

  return (
    <>
      {currView.selectedView === "Dashboard" && (
        <div className="recent-transactions-top">
          <span className="section-header">Recent Transactions</span>
          <div className="recent-transactions-show-more">
            <button onClick={changeViewHandler}>Show more</button>
          </div>
        </div>
      )}

      <table className="recent-transactions">
        <thead>
          <tr className="tr-headings">
            <th>Account</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            {currView.selectedView!== "Dashboard" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {limitedTransactions.map((transaction, index) => {
            const asset = assets.find((asset) => asset.id === transaction.asset_id);
            const assetName = asset ? asset.name : "Unknown";

            const category = categories.find((category) => category.id === transaction.category_id);
            const categoryName = category ? category.name : "Unknown";
            
            return ( 
            <tr key={index}>
              <td>{assetName}</td>
              <td>{categoryName}</td>
              <td>{transaction.date.substring(0,10)}</td>
              <td>{transaction.price}</td>
              {currView.selectedView !== "Dashboard" && <td><button className="edit-button"><Icon path={mdiPencilOutline} size={0.8} /></button></td>}
            </tr>)
          })}
        </tbody>
      </table>
    </>
  );
};
export default RecentTransactions;
