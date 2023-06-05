import PropTypes from 'prop-types';
import { Item, ItemContainer, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onClick }) => {
  return (
    <Item key={id}>
      <ItemContainer>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => onClick(id)}>
          Delete
        </Button>
      </ItemContainer>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
