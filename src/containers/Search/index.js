import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image} from 'react-native';
import {Searchbar, List, TouchableRipple, Button} from 'react-native-paper';
import {SafeAreaView} from 'react-navigation';
import {Images} from '../../themes';
import Loading from '../../components/Loading';
import {BookActions, BookSelectors} from '../../redux/ducks/BookRedux';
import _ from 'lodash';
import * as S from './styles';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector(BookSelectors.selectLoading);
  const books = useSelector(BookSelectors.selectBooks);
  const totalItems = useSelector(BookSelectors.selectTotalItems);
  const [search, setSearch] = useState('');
  const searchTimeout = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (loading) {
      scrollRef.current.scrollToEnd({animated: true});
    }
  }, [loading]);

  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      dispatch(BookActions.books(0, search));
    }, 1000);
  }, [search]);

  const nextPage = () => {
    dispatch(BookActions.books(books.length, search));
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
  };

  return (
    <SafeAreaView forceInset={{bottom: 'never'}}>
      <View style={{maxHeight: '100%'}}>
        <Searchbar
          placeholder="Pesquise os Livros"
          onChangeText={setSearch}
          value={search}
          style={{margin: 5}}
        />
        <List.Section>
          <List.Subheader>
            {_.isEmpty(search)
              ? 'Efetue a pesquisa dos livros'
              : `${totalItems} livros encontrados`}
          </List.Subheader>
        </List.Section>

        <S.ListSectionWrapper
          ref={scrollRef}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && !loading) {
              nextPage();
            }
          }}>
          <List.Section>
            {books.map((b, index) => {
              return (
                <TouchableRipple
                  key={index}
                  onPress={() => navigation.navigate('Detail', b)}
                  rippleColor="rgba(0, 0, 0, .32)">
                  <List.Item
                    title={`${b.volumeInfo.title}`}
                    description={`Ano de Publicação: ${
                      b.volumeInfo.publishedDate
                        ? b.volumeInfo.publishedDate.split('-')[0]
                        : 'Não definido'
                    }\nAutores: ${(b.volumeInfo.authors
                      ? b.volumeInfo.authors
                      : []
                    ).join(', ')}\nISBN: ${
                      b.volumeInfo.industryIdentifiers
                        ? b.volumeInfo.industryIdentifiers[
                            b.volumeInfo.industryIdentifiers.length - 1
                          ].identifier
                        : ''
                    }`}
                    descriptionNumberOfLines={5}
                    right={() => (
                      <List.Icon icon="chevron-right" style={{marginTop: 30}} />
                    )}
                    left={() => (
                      <S.BookWrapper>
                        <S.Book
                          source={{
                            uri: b.volumeInfo.imageLinks
                              ? b.volumeInfo.imageLinks.thumbnail
                              : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
                          }}
                        />
                      </S.BookWrapper>
                    )}
                  />
                </TouchableRipple>
              );
            })}
          </List.Section>
          {loading && <Loading />}
        </S.ListSectionWrapper>
      </View>
    </SafeAreaView>
  );
};

Search.navigationOptions = {
  title: 'Livros',
};

export default Search;
