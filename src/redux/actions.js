import {CREATE_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from './types'

export const createPost = post => ({type: CREATE_POST, payload: post})

export const showLoader = () => ({type: SHOW_LOADER})

export const hideLoader = () => ({type: HIDE_LOADER})

export const showAlert = text => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export const hideAlert = () => ({type: HIDE_ALERT})

export const fetchPosts = () => ({type: REQUEST_POSTS})


