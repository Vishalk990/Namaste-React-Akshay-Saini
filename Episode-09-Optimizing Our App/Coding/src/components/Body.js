import RestaurantCard from "./RestaurantCard";
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

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return <h1>Looks like you're Offline!!. Please check your internet connection.</h1>

    return listOfRestaurant?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search any Restaurant..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, listOfRestaurant);
                        setFilteredRestaurant(data);
                    }}
                >
                    Search
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating >= 4.5
                        );
                        setFilteredRestaurant(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                }

            </div>
        </div >
    )
};

export default Body;