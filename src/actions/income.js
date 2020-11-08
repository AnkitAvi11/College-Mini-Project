
const loadingIncome = () => {
    console.log('income loading')
    return {
        type : 'GET_INCOME_LOADING'
    }
}

const incomeError = (err) => {
    console.log('loading error')
    return {
        type : 'GET_INCOME_ERROR',
        payload : err
    }
}

const incomeSuccess = (incomes) => {
    return {
        tyep : 'GET_INCOME_SUCCESS',
        payload : incomes
    }
}


export const getAllIncomes = (user) => {
    return async (dispatch) => {
        dispatch(loadingIncome());
        
    }
}