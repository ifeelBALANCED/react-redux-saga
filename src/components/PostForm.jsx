import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Alert} from './Alert'

const PostForm = ({showAlert, createPost, alert}) => {
    const [state, setState] = useState({
        title: ''
    })
    const {title} = state
    const submitHandler = event => {
        event.preventDefault()

        if (!title.trim()) {
            return showAlert('Название поста не может быть пустым')
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        createPost(newPost)
        setState({title: ''})

    }

    const changeInputHandler = event => {
        const {name, value} = event.target
        setState(prev => ({...prev, [name]: value}))
    }

    return (
        <form onSubmit={submitHandler}>
            {alert && <Alert text={alert}/>}
            <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    name="title"
                    onChange={changeInputHandler}
                />
            </div>
            <button className="btn btn-success" type="submit">Создать</button>
        </form>
    )
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
