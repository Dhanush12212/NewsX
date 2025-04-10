import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import {API_URL} from './../../config';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    const buildUrl = (pageNumber) => {
        return `${API_URL}/news?country=${props.country}&category=${props.category}&page=${pageNumber}&pageSize=${props.pageSize}`;
    };

    const updateNews = async () => {
        props.setProgress(10);
        setLoading(true);

        try {
            const url = buildUrl(1);
            const response = await fetch(url);
            props.setProgress(30);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const parsedData = await response.json();
            props.setProgress(70);

            setArticles(parsedData.articles || []);
            setTotalResults(parsedData.totalResults || 0);
            setPage(1);
        } catch (error) {
            console.error("Failed to fetch news:", error);
        } finally {
            setLoading(false);
            props.setProgress(100);
        }
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsX`;
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.category, props.country]);

    const fetchMoreData = async () => {
        try {
            const nextPage = page + 1;
            const url = buildUrl(nextPage);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const parsedData = await response.json();
            setArticles(prev => [...prev, ...(parsedData.articles || [])]);
            setTotalResults(parsedData.totalResults || totalResults);
            setPage(nextPage);
        } catch (error) {
            console.error("Error fetching more news:", error);
        }
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                NewsX - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>

            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="col-md-3" key={element.url}>
                                <NewsItem
                                    title={element.title || ""}
                                    description={element.description || ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source?.name}
                                />
                            </div>
                        ))}
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
    setProgress: PropTypes.func.isRequired,
};

export default News;
