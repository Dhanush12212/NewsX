import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        try {
            props.setProgress(10);
            const API_KEY = import.meta.env.VITE_NEWS_API_KEY; // ✅ Correct way for Vite environment variables
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${API_KEY}&page=${page}&pageSize=${props.pageSize}`;
            
            setLoading(true);
            let response = await fetch(url);
            props.setProgress(30);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let parsedData = await response.json();
            props.setProgress(70);

            setArticles(parsedData.articles || []);
            setTotalResults(parsedData.totalResults || 0);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch news:", error);
        } finally {
            props.setProgress(100);
        }
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        try {
            const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
            const nextPage = page + 1; // ✅ Use new page value directly in API request

            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${API_KEY}&page=${nextPage}&pageSize=${props.pageSize}`;

            let response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            let parsedData = await response.json();

            setArticles(prevArticles => [...prevArticles, ...parsedData.articles]); // ✅ Append new articles correctly
            setTotalResults(parsedData.totalResults);
            setPage(nextPage); // ✅ Update page **after** successful fetch
        } catch (error) {
            console.error("Error fetching more news:", error);
        }
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-3" key={element.url}>
                                    <NewsItem 
                                        title={element.title || ""} 
                                        description={element.description || ""} 
                                        imageUrl={element.urlToImage} 
                                        newsUrl={element.url} 
                                        author={element.author} 
                                        date={element.publishedAt} 
                                        source={element.source.name} 
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
