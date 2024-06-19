import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;


    return (
        <div className="m-2 w-[300px] transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-100 transition-0.5s">
            <img className="rounded-2xl w-[330px] h-[200px] object-cover" src={CDN_URL + cloudinaryImageId}
                alt="res-logo" />
            <h6 className="font-bold pt-2 ml-2">{name}</h6>
            <p className="text-sm font-bold tracking-tighter ml-1">⭐{avgRating} ~ {sla?.slaString}</p>
            <p className="ml-2 text-xs font-light">{cuisines.join(", ")}</p>
            <h4 className="ml-2 text-xs font-semibold">{costForTwo}</h4>
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