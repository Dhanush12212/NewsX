import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // State variables
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to update news (called on initial load and when fetching more data)
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=99263413b5d44114ba893f5012fa1d83&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  // Fetch more data for infinite scrolling
  const fetchMoreData = async () => { 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=99263413b5d44114ba893f5012fa1d83&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1); 
    let data = await fetch(url); 
    let parsedData = await data.json(); 
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults); 
  };

  // Effect hook to fetch news when component mounts or page updates
  useEffect(() => {
    document.title = `NewsX - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]); // Dependency array includes 'page' to trigger updates when it changes

  return (
    <>
      <div className="container my-5 text-center">
        <h1 style={{margin:'30px 0px',marginTop:'90PX',textDecoration:'underline',fontWeight:'bold'}}>NewsX - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={element.description ? element.description.slice(0, 80) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    Author={element.author}
                    date={element.publishedAt}
                    Source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

// Default props
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

// Prop types
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string, 
  setProgress: PropTypes.func.isRequired,
};

export default News;
