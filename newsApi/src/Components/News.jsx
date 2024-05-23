import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchNews } from '../Redux/Action'
const News = () => {
    const dispatch=useDispatch()
    // const newsSelectore=useSelector((state)=>state)
    const {news,loading,error}=useSelector((state)=>state)
    console.log(news)
    useEffect(()=>{
        dispatch(fetchNews())
    },[dispatch])
  return (
    <div>
        {loading && <div>.....Content Load</div>}
        {error && <div>{error}</div>}
        {
            news && (
                <ul>
                    {
                        news.map((article,index)=>{
                            return(<>
                            <li key={index}>
                            <a href={article.url} target='_balnk' rel='noopener'>
                                    <h2>{article.title}</h2>
                                </a>
                                <p>{article.description}</p>
                                <p>{article.source}</p>
                                <hr/>

                            </li>
                            </>)
                        })
                    }
                </ul>
            )
          
        }
    </div>
  )
}

export default News