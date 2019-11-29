import React, { useState } from 'react'
import { connect } from 'react-redux'
import { clearJokes } from '../../actions'
import './styles.css'

const jokeList = (props) => {
    const { open, jokes, onClose, dispatch } = props

    const containerClassName = "joke_list_overlay" + (open ? ' show' : '')
    return (
        <div className={containerClassName}>
            {jokes && jokes.length > 0 ?
                <ol className="joke_list">
                    {jokes.map((j) => <li><h4>{j}</h4></li>)}
                </ol>
                : <h2>No jokes liked!</h2>
            }
            <div>
                <button className="action_btn" onClick={() => onClose()} >Close</button>
                {jokes.length > 0 && <button className="action_btn" onClick={() => dispatch(clearJokes())} >Clear Jokes</button>}
            </div>
        </div>
    )
}

export default connect((state) => { return { jokes: state.jokes } })(jokeList)