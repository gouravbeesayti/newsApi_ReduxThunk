import { FETCH_NEW_FAILURE,FETCH_NEW_REQUEST,FETCH_NEW_SUCCESS } from "./Action"
const initialState={
    news:[],
    loading:false,
    error:null,

}
 const newReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_NEW_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case FETCH_NEW_SUCCESS:
            return{
                ...state,
                news:action.payload,
                loading:false,
                error:null
            }
        case FETCH_NEW_FAILURE:
            return{
                ...state,
                error:action.payload,
                loading:false,
                }
                default:
                    return state;
    }

}

export default newReducer