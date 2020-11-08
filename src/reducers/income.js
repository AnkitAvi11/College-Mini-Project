
const state = {
    'loading' : false,
    'error' : null,
    'incomes' : null
}


const incomeReducer = (state, action) => {
    switch(action.type) {
        case 'GET_INCOME_LOADING' : 
            return {
                ...state,
                loading : true
            }

        case 'GET_INCOME_ERROR' : 
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        case 'GET_INCOME_SUCCESS' : 
            return {
                ...state,
                loading : false,
                error : null,
                incomes : action.payload
            }

        default :
            return state
    }
}

export default incomeReducer;
