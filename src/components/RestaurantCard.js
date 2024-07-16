import { IMG_CDN_URL } from "../config";
import { restaurantList } from "../config";

const RestaurantCard = ({name, cuisines, totalRatingsString, restaurant}) => {
    return (
      <div className="card">
        <img src={ IMG_CDN_URL + restaurantList[1].data?.cloudinaryImageId} />
        <h2> {name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{totalRatingsString} </h4>
      </div>
    );
  };

export default RestaurantCard;