import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";


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
            const data = await fetch(SWIGGY_API_URL);
            const json = await data.json();

            // call the checkJsonData() function which return Swiggy Restaurant data
            const temp = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurant(temp);
            setFilteredRestaurant(temp);
            // console.log(temp[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return listOfRestaurant.length === 0 ? (
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
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }

            </div>
        </div >
    )
};

export default Body;