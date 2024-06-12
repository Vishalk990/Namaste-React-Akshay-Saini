import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;


    return (
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-300">
            <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}
                alt="res-logo" />
            <h3 className="font-bold py-3 text-center">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
};

export const RestaurantOpen = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
};

export default RestaurantCard;  