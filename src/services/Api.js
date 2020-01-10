import apisauce from 'apisauce';

const GOOGLE_API_KEY =
  'AIzaSyB_unoSeN1GyC02igIVlb8fzeZSEGoFqTQ-8KrqRdA4GNuaAUyW0DNlgNqU';

const create = (baseURL = 'https://www.googleapis.com/books/v1/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 60 second timeout...
    timeout: 60000,
  });

  const books = (startIndex, search) =>
    api.get(
      `volumes?q=${search}&fields=kind,items(id,volumeInfo/title,volumeInfo/authors, volumeInfo/publishedDate, volumeInfo/imageLinks)&printType=books&maxResults=10&startIndex=${startIndex}`,
    );

  return {
    books,
  };
};

export default {
  create,
};
