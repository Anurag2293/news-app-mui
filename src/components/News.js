import React, { useState } from "react";
import { Button } from "@mui/material";

const News = () => {
    const [news, setNews] = useState([])

	const fetchNews = async () => {
		try {
			const url = "https://api.newscatcherapi.com/v2/search?q=india&page_size=5"
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					'x-api-key': 'jTqjLgWbOWKlinYhe0D3mgDo58ja5Xv4vjRQVyA7OyA'
				}
			});
			const object = await response.json();
			const res = news.concat(object.articles);
			setNews(res)
		} catch (error) {
			console.log(error.message)
		}
	}


    return (
        <>
            <div className="container">
                <div>
                    <Button variant="contained" onClick={fetchNews}>Fetch News</Button>
                </div>
            
                {news.map((element, index) => {
                    return (<div key={index}>{element.title}</div>)
                })}
            </div>
        </>
    )
}

export default News