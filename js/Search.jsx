import React from "react";
import preload from '../data.json'

const Search = () => (
    <div className="search">
    <pre>
        <code>
        { preload.shows.map( show => <h3>{show.title}</h3> ) }
        </code>
    </pre>
    </div>
);

export default Search; 