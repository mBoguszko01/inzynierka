import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Assets.css";

const Assets = () => {
  const assets = useSelector((state) => state.assets.totalAssets);
  const [limiter, setLimiter] = useState(50);

  let limitedAssets = [];
  limitedAssets = [...assets].slice(0, limiter);

  return (
    <table className="assets-table">
      <thead>
        <tr className="tr-headings">
          <th>Logo</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {limitedAssets.map((asset, index) => (
          <tr key={index}>
            <td>DODAC LOGO</td>
            <td>{asset.name}</td>
            <td>{asset.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Assets;
