import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="m-4 p-4 w-[272px]  h-[500px] bg-gray-100  rounded-lg hover:bg-gray-200 hover:border border-solid border-black hover:shadow-xl">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-center">{name}</h3>
      <h4 className="font-bold py-2 text-center">{cuisines.join(" ,")}</h4>
      <h4 className="font-bold py-2 text-center">{avgRating} star</h4>
      <h4 className="font-bold py-2 text-center">
        RS.{costForTwo / 100} FOR TWO
      </h4>
      <h4 className="font-bold py-2 text-center">{deliveryTime}Minutes</h4>
      <h4> User : {loggedInUser}</h4>
    </div>
  );
};
export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
  