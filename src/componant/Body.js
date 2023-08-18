import RestaurentCard, { withPromotedLabel } from "./Restarantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Look like Your offline!! Please Check your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Filter flex">
        <div className="Search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-2 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="Search m-2 p-3 flex items-center">
          <button
            className="px-2 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const Filterlist = listofRestaurants.filter(
                (res) => res.data.avgRating > 4.2
              );
              setlistofRestaurants(Filterlist);
            }}
          >
            Top Rated Restarant
          </button>
        </div>
        <div className="Search m-3 p-4 flex items-center">
          <label>UserName:</label>  
          <input
            className="border border-black"
            value={loggedInUser} 
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            {restaurant.data.promoted ? (
              <RestaurentCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
