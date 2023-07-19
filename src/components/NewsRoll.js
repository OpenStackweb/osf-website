import React, { useState } from 'react'
import moment from 'moment';
import LinkComponent from './LinkComponent';

const paginatePosts = (news) => {
  let perChunk = 5 // items per chunk    
  let inputArray = news.filter(n => n.hideArticle === false);
  let paginatedPosts = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, []);
  return paginatedPosts
}

const NewsRoll = ({ news }) => {

  const [currentPage, setCurrentPage] = useState(0);
  const paginatedPosts = paginatePosts(news);

  const changePage = (next) => {
    if (next && currentPage + 1 <= paginatedPosts.length - 1) {
      setCurrentPage(currentPage + 1)
    } else if (!next && currentPage - 1 >= 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const generatePagination = () => {
    return (
      paginatedPosts.map((page, index) => {
        return (
          <li key={`page-${index}`} onClick={() => setCurrentPage(index)}>
            <a className={`pagination-link ${index === currentPage ? 'is-current' : ''}`} aria-label={`Page ${index + 1}`} aria-current="page">{index + 1}</a>
          </li>
        )
      })
    );
  }

  return (
    news && news.filter(n => n.hideArticle === false).length === 0 ?
      <div style={{ minHeight: '47vh' }}>There don't seem to be any news that match.</div>
      :
      <>
        {paginatedPosts[currentPage].sort((a, b) => b.date.localeCompare(a.date)).map((post, index) => {
          if (post.hideArticle === false) {
            return (
              <div className="article-excerpt" key={index}>
                <div className="article-excerpt-meta">
                  <span>{moment(post.date).format('MMM D, YYYY')}</span>
                </div>
                <h5 className="article-excerpt-title">
                  <LinkComponent href={post.link} className="">{post.title}</LinkComponent>
                </h5>
                <div className="article-excerpt-entry">
                  <div>
                    <p>{post.site}</p>
                  </div>
                </div>
                <hr />
              </div>
            )
          }
        })}
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <a onClick={() => changePage(false)} className="pagination-previous">Previous</a>
          <a onClick={() => changePage(true)} className="pagination-next">Next page</a>
          <ul className="pagination-list">
            {generatePagination()}
          </ul>
        </nav>
      </>
  )
}

export default NewsRoll