import RestaurentCard from "./Restarantcard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofRestaurants(json.data.cards[2].data.data.cards);
   }
  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const Filterlist = listofRestaurants.filter(
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
      </div>
    </div>
  );
};
export default Body;
