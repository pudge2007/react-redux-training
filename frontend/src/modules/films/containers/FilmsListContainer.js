import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmsList from '../components/FilmsList';
import { getFilmsList } from '../selectors';

class FilmsListContainer extends Component {

    render() {
        return <FilmsList films={this.props.films} />
    }
}

const mapStateToProps = (state) => {
    return {
        films: getFilmsList(state)
    }
}

export default connect(
    mapStateToProps
)(FilmsListContainer);