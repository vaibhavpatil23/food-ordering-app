import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="m-4 p-4 w-[270px]  h-[500px] bg-gray-100 border border-solid border-black rounded-lg hover:bg-gray-200 hover:shadow-xl">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-center">{name}</h3>
      <h4 className="font-bold py-2 text-center">{cuisines.join(" ,")}</h4>
      <h4 className="font-bold py-2 text-center">{avgRating} start</h4>
      <h4 className="font-bold py-2 text-center">
        RS.{costForTwo / 100} FOR TWO
      </h4>
      <h4 className="font-bold py-2 text-center">{deliveryTime}minutes</h4>
    </div>
  );
};
export default RestaurentCard;
