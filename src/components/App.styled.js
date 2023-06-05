import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  margin: 40px auto 0;
  padding: 40px;

  background-color: #e6e6fa;
  box-shadow: -1px 6px 30px 10px rgba(29, 29, 116, 0.8);
  -webkit-box-shadow: -1px 6px 30px 10px rgba(29, 29, 116, 0.8);
  -moz-box-shadow: -1px 6px 30px 10px rgba(29, 29, 116, 0.8);
  border-radius: 30px;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.8;
`;
