import RestaurantCard, { RestaurantOpen } from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


function filterData(searchText, listOfRestaurant) {
    const data = listOfRestaurant.filter((restaurant) => {
        return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    });

    return data;
}


const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const RestaurantOpened = RestaurantOpen(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_API_URL);
            const json = await response.json();

            function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                    let checkData =
                        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                            ?.restaurants;
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
            }
            const resData = checkJsonData(json);

            setListOfRestaurant(resData);
            setFilteredRestaurant(resData);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(listOfRestaurant);

    
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return <h1>Looks like you're Offline!!. Please check your internet connection.</h1>

    return listOfRestaurant?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 flex items-center">
                    <input
                        type="text"
                        className="border border-black py-2 px-4 rounded-lg"
                        placeholder="Search any Restaurant..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <button
                        className="px-4 py-2 bg-green-400 m-4 rounded-lg"
                        onClick={() => {
                            const data = filterData(searchText, listOfRestaurant);
                            setFilteredRestaurant(data);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-400 m-4 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurant.filter(
                                (res) => res.info.avgRating >= 4.5
                            );
                            setFilteredRestaurant(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map(restaurant => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                        >
                            {
                                restaurant.info.isOpen ? (
                                    <RestaurantOpened resData={restaurant} />
                                ) : (
                                    <RestaurantCard resData={restaurant} />
                                )}
                        </Link>
                    ))
                }

            </div>
        </div >
    )
};

export default Body;