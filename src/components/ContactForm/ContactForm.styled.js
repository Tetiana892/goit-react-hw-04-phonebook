import styled from '@emotion/styled';

export const FormContainer = styled.form`
  padding-bottom: 30px;
  border-bottom: 3px solid #aaa;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const LabelInput = styled.label`
  font-size: 18px;
  font-weight: 20px;
`;

export const Input = styled.input`
  width: 160px;
  height: 20px;
  padding: 5px;
  border: 1px solid #555;
  border-radius: 6px;
`;

export const Button = styled.button`
  display: block;
  padding: 8px 20px;
  margin: 0 auto;
  margin-top: 30px;

  background-image: linear-gradient(
    45deg,
    #4158d0 0%,
    #c850c0 40%,
    #ffcc70 90%
  );

  border: 2px solid #747474;
  border-radius: 10px;
  font-weight: 700;
  color: #ffffff;
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
