const initialstate = 10
const changeState = (state = initialstate, action) => {
    if (action.type == "USER") {
        return { 
           ...state,
            bigdata : action.payload.number
        }
    }
    else{
        return state 
    }
}

export default changeState