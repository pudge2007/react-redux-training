import React from 'react';

import { styles } from './styles';

const FilmsListItem = ({film}) => {
    return (
        <div className="row">
            <div className="col-8">
                <p style={styles.title}>
                    {film.title}
                </p>
                <p style={styles.subtitle}>
                    {film.eng}
                </p>
            </div>
            <div className="col-2">
                <h3>{film.rating}</h3>
            </div>
        </div>
    )
}

export default FilmsListItem;