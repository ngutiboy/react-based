import React from 'react';
import { prependOnceListener } from 'cluster';

function SearchForm(){
    return(
        <div id="searchContainer">
        <h2>Book Search</h2>
        <form id="bookSearch">
        <label for ="bookInput" form ="bookSearch">Enter a book Search:</label>
<hr></hr>
<input type ="text" name="bookInput" id ="bookInput" form = "bookSearch" onChange={(e)=>props.handleChange(e)} placeholder= "book search"></input>
<hr></hr>
<button type ="submit" onClick={(e)=>props.handleSearchClick(e)}>Search</button>
        </form>
        
        </div>
    );
}
export default SearchForm;
