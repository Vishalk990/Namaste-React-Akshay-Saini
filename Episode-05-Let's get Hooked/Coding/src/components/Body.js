import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";


function filterData(searchText, listOfRestaurant) {
    const data = listOfRestaurant.filter((restaurant) => {
        return restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    });

    return data;
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
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
                        setListOfRestaurant(data);
                    }}
                >
                    Search
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.data.avgRating >= 4
                        );
                        setListOfRestaurant(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }

            </div>
        </div >
    )
};

export default Body;