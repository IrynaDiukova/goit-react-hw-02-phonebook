import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
      <ul>
        {contacts.map(({id, name, number}) => (
            <li 
            key={id}
            id={id}
            name={name} 
            number={number}>
                <span> {name} </span>
                <span> {number} </span>
                <button type="button" onClick={() => onDeleteContact(id)}> Delete </button>
            </li>))}
       </ul>
    )
    
};

ContactList.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        number: PropTypes.string,   
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;