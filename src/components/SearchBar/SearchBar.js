import React from "react";
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated':'rating',
    'Most Reviewed':'review_count',
};

class SearchBar extends React.Component{

    //dynamically return the list items needed to display based on the sort options (bestmatch, rating and reiview count)
    renderSortByOptions(){
        //accessing the keys of the sortByOptions Object using keys() then iterate through them using map()
        //then pass a call back function to map. callback function has one paramter called sortByOption
        //callback function is one of the ways to grant function access to the component (binding)
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;