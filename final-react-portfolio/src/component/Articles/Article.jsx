import React from 'react';
import './Article.css';


const Article = (props) => {

    return (
        <div className="Article">
            <h1>{props.Header}</h1>
            <p>{props.Text}</p>
        </div>
    )
}

export default Article;
