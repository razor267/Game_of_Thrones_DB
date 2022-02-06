import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from "../errorMessage";
import {BooksPage, CharacterPage, HousesPage, BooksItem} from "../pages";
import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {

    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character
                                </button>
                            </Col>
                        </Row>
                            <Route path="/" exact component={()=><h1>Welcome to GOT DB</h1>}/>
                            <Route path="/characters" component={CharacterPage}/>
                            <Route path="/houses" component={HousesPage}/>
                            <Route path="/books" exact component={BooksPage}/>
                            <Route path='/books/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return <BooksItem bookId={id}/>}
                            }/>
                    </Container>
                </div>
            </Router>
        );
    }
};