// @flow

import{ SET_SEARCH_TERM } from './actions';

export default function setSearchTerm(searchTerm) {
    console.log("bar horing");
    return { type: SET_SEARCH_TERM, payload: searchTerm };
};