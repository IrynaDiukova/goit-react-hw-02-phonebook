import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
    <label>
        <h2>Find contacts by name</h2>
        <input 
        type="text"
        value={value}
        onChange={onChange} />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;