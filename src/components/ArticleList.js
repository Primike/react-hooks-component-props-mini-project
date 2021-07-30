import React from "react";
import Article from "./Article.js"

function ArticleList({posts}) {
    return (
        <main>
            {posts.map(x => {return <Article key={x.id} title={x.title} date={x.date} preview={x.preview}/>})}
        </main>
    )
};

export default ArticleList;