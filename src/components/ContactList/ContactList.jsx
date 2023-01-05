import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <>
        {''}
    {contacts.length !== 0 && (
      <ul>
        {contacts.map(({id, name, number}) => (
            <li 
            key={name}
            id={id}>
                <span> {name} :  {number} </span>
                <button type="button" onClick={() => onDeleteContact(id)}> Delete </button>
            </li>))}
       </ul>)}
       </>
    )
    
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;