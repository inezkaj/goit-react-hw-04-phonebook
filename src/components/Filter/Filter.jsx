import PropTypes from 'prop-types';

const Filter = ({ addingFilterList }) => {
  const addFilter = evt => {
    const query = evt.currentTarget.value;

    addingFilterList(query);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        onChange={addFilter}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  addingFilterList: PropTypes.func,
};
export default Filter;
