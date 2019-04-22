import React from 'react';
import BookResult  from 'components/BookResult';

function ResultContainer(props){
    if(props.path === "/"){
        return(
            <div id="resultContainer">
            <h2>Result Found</h2>
            {props.bookData.map((book)=>{
                const bookInfor= book.volumeInfor;
                return <BookResult
                title={bookInfor.title}
                author={bookInfor.author}
                description={bookInfor.description}
                link ={bookInfor.canonicalVolumeLink}
                img ={bookInfor.imageLink}
                path = {props.path}
                key ={book.id}/>

                

            
        
            })}
            
            
            </div>
        )
    } else if (props.path ==="/saved"){
        if(props.savedBooks.length > 0){

        
        return(
            <div id= "resultContainer">
            <h2>Saved Books</h2>
            {props.savedBooks.map((book)=>{
                return <BookResult
                title ={book.title}
                author = {book.author}
                description ={book.description}
                img ={book.img}
                link ={book.link}
                id ={book._id}
                path ={props.path}
                key = {book._id}/>

            })}

            
            
            </div>
        );
        }else{
            return(
                <div id = "resultContainer">
                <h2>Saved Books</h2>
                <p>No saved books.</p>
                
                </div>
            );
        }}}


export default ResultContainer;