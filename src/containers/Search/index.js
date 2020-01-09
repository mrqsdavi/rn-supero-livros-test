import React from 'react';
import {View, Image} from 'react-native';
import {Searchbar, List, TouchableRipple, Button} from 'react-native-paper';
import {Images} from '../../themes';
import * as S from './styles';

const Search = () => {
  return (
    <View>
      <Searchbar
        placeholder="Pesquise os Livros"
        onChangeText={query => {}}
        // value={firstQuery}
      />
      <List.Section>
        <List.Subheader>Filtrar por ano de publicação</List.Subheader>
      </List.Section>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Button
          icon="calendar"
          mode="outline"
          onPress={() => console.log('Pressed')}>
          Ano Inicial
        </Button>
        <Button
          icon="calendar"
          mode="outline"
          onPress={() => console.log('Pressed')}>
          Ano Final
        </Button>
      </View>
      <S.ListSectionWrapper>
        <List.Section>
          <List.Subheader>Some title</List.Subheader>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
          <TouchableRipple
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title={`Contato (1997)`}
              description={`Carl Sagan\nISBN: 9982747729797913737`}
              left={() => (
                <S.BookWrapper>
                  <S.Book source={Images.book_cover_sample} />
                </S.BookWrapper>
              )}
            />
          </TouchableRipple>
        </List.Section>
      </S.ListSectionWrapper>
    </View>
  );
};

export default Search;
