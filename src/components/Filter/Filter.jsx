import PropTypes from 'prop-types';
import { FilterContainer, Input, Text } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Name"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
