import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  &:last-child {
    margin-bottom: 10px;
  }

  display: block;
  padding: 4px 14px;

  background-image: linear-gradient(
    45deg,
    #4158d0 0%,
    #c850c0 40%,
    #ffcc70 90%
  );
  border: 2px solid #747474;
  border-radius: 10px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #000;
    background: #9370db;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
