export const FETCH_NEW_REQUEST = 'FETCH_NEW_REQUEST';
export const FETCH_NEW_SUCCESS = 'FETCH_NEW_SUCCESS';
export const FETCH_NEW_FAILURE = 'FETCH_NEW_FAILURE';

export const fetchNewsRequest =()=>{
    return{
        type:FETCH_NEW_REQUEST,
    }
}

export const fetchNewsSuccess =(news)=>{
    return{
        type:FETCH_NEW_SUCCESS,
        payload:news
    }
}
export const fetchNewsFailure =(error)=>{
    return{
        type:FETCH_NEW_FAILURE,
        payload:error
    }
}

export const fetchNews =()=>{
    return (dispatch)=>{
        dispatch(fetchNewsRequest())
        fetch('https://newsapi.org/v2/top-headlines?country=in&apikey=e58115446a8f44e782bae4eb44f448f6')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            const news=data.articles.map((elem)=>{
                return{
                    title:elem.title,
                    description:elem.description,
                    url:elem.url,
                    source:elem.source.name
                }
                
            })
            console.log(news +'news')
            dispatch(fetchNewsSuccess(news))
        })
        .catch(error=>{
            dispatch(fetchNewsFailure(error.message))
        })
    }
}