    import React from 'react';
    import { Link, useParams } from 'react-router-dom';
    import volumeData from '../volume1.json';

    function ArticleIssue() {
    const { issueNumber } = useParams();

    const currentIssue = volumeData.issues.find(
        (issue) => issue.issueNumber === parseInt(issueNumber)
    );


    const currentArticles = currentIssue.articles; 
    const currentThesis = currentIssue.thesis;
    const currentDissertation = currentIssue.dissertation;


    const articleIssue = (articles) => {
        return articles.map((article) => (
        <div className="row d-flex justify-content-center align-items-center" style={{marginBottom: '60px'}} key={article.id}>
            <div className='mt-4'>
                <Link to={`/research/archives/vol1/${article.id}`}>
                <p style={{ color: 'rgb(33, 64, 154)', fontWeight: '600' }}>{article.title}</p>
                </Link>
            </div>

            <div>
                <p style={{margin: '0'}}><b>{article.author[0].name}</b></p>
            </div>

            <div className="mt-0">
                <p>{article.author[0].school}</p>
            </div>

            <div className="mt-2" style={{ backgroundColor: 'rgb(33, 64, 154)' }}>
                <p style={{ color: 'white', fontSize: 'large', textAlign: 'center' }}>PDF</p>
            </div>

        </div>
        ));
    };

    return (
        <div className="articleIssue">

            <div className="articles-top-div mt-3 mb-3">
                <div className="row">

                    <div className='mb-4'>
                        <div className="col-md-7 flex">
                            <span style={{fontWeight: '600', fontSize: 'large', textAlign: 'left'}}>ARCHIVES</span>
                        </div>
                    </div>
                    
                    
                    <div className="col d-flex justify-content-center align-items-center mb-5">
                        <img className="issue-cover" src={`/img/vol1/issue${currentIssue.issueNumber}.png`} alt="issue-cover" />
                        <div className="col-md-4 mt-3 text-center">
                            <div>
                                <h1>
                                    {currentIssue.issueHeader}
                                </h1>
                                <div className="issue-description mt-3" style={{marginLeft: '40px'}}>
                                    <p>The authors of this volume come from <b>1</b> country:</p>
                                    <p><b>{currentIssue.country}</b></p>
                                    <br />
                                    <p><strong>ISSN:</strong> <a href="https://portal.issn.org/resource/ISSN/2984-7176">2984-7176 (Print)</a> | <a href="https://portal.issn.org/resource/ISSN/2984-7184">2984-7184 (Online)</a></p>
                                    <p><strong>PUBLISHED:</strong> {currentIssue.published}</p>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>

            <div className="row justify-content-center align-items-center">
                <div className="col-7 text-center">
                    {currentArticles ? (
                    <div>
                        {articleIssue(currentArticles)}
                    </div>
                    ) : null}

                    {issueNumber === '3' ? (
                    <div>
                        <h4>Dissertation</h4>
                        {articleIssue(currentDissertation)}
                    </div>
                    ) : issueNumber === '4' ? (
                    <div>
                        <h4>Theses</h4>
                        {articleIssue(currentThesis)}
                    </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
    }

    export default ArticleIssue;
