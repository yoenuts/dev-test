import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleInfo() {
  const { articleID } = useParams();
  
  return (
    <div className="articleInfo">
      <h1>{articleID}</h1>
    </div>
  );
}

export default ArticleInfo;