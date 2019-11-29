import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import { addJoke } from '../../actions'
import JokeList from '../JokeList';
import Loading from '../../components/Loading'
import { ReactComponent as Like } from '../../assets/like.svg';
import './styles.css'

const avatar = "https://assets.chucknorris.host/img/avatar/chuck-norris.png";

const Home = (props) => {
    const { dispatch } = props;
    const [jokeListOpen, setJokeListOpen] = useState(false)
    const [joke, setJoke] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchJoke()
    }, [])

    const fetchJoke = async () => {
        setIsLoading(true);
        const url = 'https://api.chucknorris.io/jokes/random';
        const options = {}
        try {
            const res = await fetch(url, options);
            const json = await res.json();

            //setting .5 second timeout for viewing loading component
            setTimeout(() => {
                setJoke(json.value);
                setIsLoading(false)
            }, 500);

        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    const saveJoke = (joke) => {
        dispatch(addJoke(joke))
    }

    const onClose = () => {
        setJokeListOpen(false)
    }

    return (
        <div className="home_container">
            <div style={{ flex: 1 }}></div>
            {isLoading ? <div style={{ flex: 1 }}><Loading /></div> :
                <div style={{ flex: 1 }}>
                    {joke &&
                        <h1 className="joke_text">"{joke}"</h1>
                    }
                    {true && <p className="error_text">{error}</p>}
                </div>
            }
            <div className="action_area">
                <div className="like_button dislike" onClick={() => { fetchJoke(); alert('Watch out! Chuck Norris is watching') }}>
                    <Like />
                </div>
                <img className="chuck_avatar" alt={'Chuck Norris Avatar'} src={avatar} />
                <div className="like_button" onClick={() => {
                    saveJoke(joke);
                    fetchJoke();
                }}>
                    <Like />
                </div>
            </div>
            <p className="like_list_link" onClick={() => setJokeListOpen(true)}>List of likes</p>
            <JokeList onClose={onClose} open={jokeListOpen} />
            <small className="credit_text">
                <p>
                    Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                </p>
                <p>
                    Api from <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a>
                </p>
            </small>
        </div>
    );
}

export default connect((state) => { return { jokes: state.jokes } })(Home)