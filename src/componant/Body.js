import RestaurentCard from "./Restarantcard";
import reslist from "../utils/Mockdata";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <RestaurentCard resName="KFC" cuisine="Burger,Fast Food" /> */}
      </div>
    </div>
  );
};
export default Body;
