import React, { useState, useEffect } from "react";
// import { Button } from "@mui/material";
import NewsItem from "./NewsItem";

const News = (props) => {
    const [articles, setArticles] = useState([])

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const updateNews = async () => {
		try {
			const url = `https://api.newscatcherapi.com/v2/search?q=${props.category}&countries=IN&page_size=5`
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					'x-api-key': 'SGLxMPte_jDxLFuOYtm-FZ32i3EaWpjVdh1XAvr3e-A',
					'Retry-After': 2000
				},
				cors: 'no-cors'
			});
			const parsedData = await response.json();
			console.log(parsedData.articles)
			setArticles(parsedData.articles)
		} catch (error) {
			console.log(error.message)
		}
	}

	useEffect(() => {
		updateNews();
		document.title = capitalizeFirstLetter(props.category);
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	

    return (
        <>
            <div className="container">
                {articles.map((element, index) => {
                    return (<NewsItem key={element._id} 
								title={element.title} 
								description={element.description} 
								imagesrc={element.media} 
								link={element.link}
					/>)
                })}
            </div>
        </>
    )
}

export default News