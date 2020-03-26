import { actionTypes } from '../types'

export const getListNews =()=> async(dispatch)=>{
    let url = `http://localhost:3001/news`
    const responses = await fetch(url)
    const data = responses.json()
    return dispatch({ type: actionTypes.LIST_NEWS, payload: data })
}

export const getListNewsById= () => async(dispatch) =>{
    let url = `http://localhost:3001/news/${id}`
     const responses = await fetch(url)
     const data = responses.json()
     return dispatch({type:actionTypes.LIST_NEWS,payload:data})
}