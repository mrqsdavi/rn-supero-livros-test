import styled from 'styled-components/native';

export const ListSectionWrapper = styled.ScrollView`
  height: 100%;
`;

export const BookWrapper = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Book = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
`;
