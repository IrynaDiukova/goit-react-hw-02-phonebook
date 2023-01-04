import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({value, filterName}) => (
    <label>
        <h2>Find contacts by name</h2>
        <input 
        type="text"
        value={value}
        onChange={filterName} />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterName: PropTypes.func.isRequired,
};

export default Filter;