import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
    return (
      <ul>
        {contacts.map(({id, name, number}) => (
            <li 
            key={id}
            id={id}
            name={name} 
            number={number}
            del={deleteContact} />))}
       </ul>
    )
    
};

ContactList.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        del: PropTypes.func.isRequired,
    })),
};

export default ContactList;