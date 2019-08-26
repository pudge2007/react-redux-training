import { connect } from "react-redux";

import FilmsList from "../components/FilmsList";
import { getFilmsList } from "../selectors";

const mapStateToProps = state => {
  return {
    films: getFilmsList(state)
  };
};

export default connect(mapStateToProps)(FilmsList);
