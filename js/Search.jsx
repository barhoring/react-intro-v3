import React from "react";
import preload from '../data.json'
import ShowCard from './ShowCard';

const Search = () => (
    <div className="search">
    <pre>
        <code>
        { preload.shows.map( show => (
            <ShowCard show={show} />
        ))}
        </code>
    </pre>
    </div>
);

export default Search; 