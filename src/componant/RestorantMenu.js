import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestorantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu()
  }, []);

  const fetchMenu = async () => {
    const data = await json(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=718430&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//       ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Coffe</li>
        <li>Fast Food</li>
      </ul>
    </div>
  );
};
export default RestorantMenu;
