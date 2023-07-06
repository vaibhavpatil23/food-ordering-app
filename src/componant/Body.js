import RestaurentCard from "./Restarantcard";
import reslist from "../utils/Mockdata";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(reslistś);

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const Filterlist = listofRestaurants.filterś(
              (res) => res.data.avgRating > 4
            );
            setlistofRestaurants(Filterlist);
          }}
        >
          Top Rated Restarant
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <RestaurentCard resName="KFC" cuisine="Burger,Fast Food" /> */}
      </div>
    </div>
  );
};
export default Body;
