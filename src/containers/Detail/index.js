import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Title, Subheading, Caption} from 'react-native-paper';
import {SafeAreaView} from 'react-navigation';
import Loading from '../../components/Loading';
import {BookSelectors, BookActions} from '../../redux/ducks/BookRedux';
import {path} from 'ramda';

import * as S from './styles';

const Detail = ({navigation}) => {
  const id = navigation.getParam('id', '0');
  const dispatch = useDispatch();
  const loading = useSelector(BookSelectors.selectLoadingDetail);
  const book = useSelector(BookSelectors.selectDetail);

  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [ISBN, setISBN] = useState('');
  const [year, setYear] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const publishedDate = path(['volumeInfo', 'publishedDate'], book);
    const industryIdentifiers = path(
      ['volumeInfo', 'industryIdentifiers'],
      book,
    );
    const authorsList = path(['volumeInfo', 'authors'], book);

    setTitle(path(['volumeInfo', 'title'], book));
    setISBN(
      industryIdentifiers
        ? industryIdentifiers.map(i => i.identifier).join(' / ')
        : 'Não definido',
    );
    setAuthors(authorsList ? authorsList.join(',') : 'Não definido');
    setYear(publishedDate ? publishedDate.split('-')[0] : 'Não definido');
    setLanguage(path(['volumeInfo', 'language'], book));
    setDescription(path(['volumeInfo', 'description'], book));
  }, [book]);

  useEffect(() => {
    dispatch(BookActions.detail(id));
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <S.Container>
        <S.PropertyWrapper>
          <Title>Título</Title>
          <Subheading>{title}</Subheading>
        </S.PropertyWrapper>

        <S.PropertyWrapper>
          <Title>ISBN</Title>
          <Subheading>{ISBN}</Subheading>
        </S.PropertyWrapper>

        <S.PropertyWrapper>
          <Title>Autores</Title>
          <Subheading>{authors}</Subheading>
        </S.PropertyWrapper>

        <S.PropertyWrapper>
          <Title>Ano</Title>
          <Subheading>{year}</Subheading>
        </S.PropertyWrapper>

        <S.PropertyWrapper>
          <Title>Idioma</Title>
          <Subheading>{language}</Subheading>
        </S.PropertyWrapper>

        <S.PropertyWrapper>
          <Title>Descrição</Title>
          <Subheading>{description}</Subheading>
        </S.PropertyWrapper>
      </S.Container>
    </SafeAreaView>
  );
};

Detail.navigationOptions = {
  title: 'Detalhe',
};

export default Detail;
