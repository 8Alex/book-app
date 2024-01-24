import { Params } from '../store/types';

export default class BookService {
  static async getAll({ limit = 10, index = 0 }: Params) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=book+novel+new&printType=books&maxResults=${limit}&startIndex=${index}&key=AIzaSyC21UAOm0ycghpyA2cBCFrhAQtNyt1Zv7g`
    );
    const data = await response.json();
    return data;
  }

  static async getById(id: string) {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes/' + id
    );
    const data = await response.json();
    return data;
  }

  static async getTopSellersBooks() {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=book+best+seller+novel+popular&printType=books&maxResults=6&key=AIzaSyC21UAOm0ycghpyA2cBCFrhAQtNyt1Zv7g'
    );
    const data = await response.json();
    return data;
  }

  static async getRecommendedBooks() {
    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=intitle:Harry+Potter+and&printType=books&maxResults=6&key=AIzaSyC21UAOm0ycghpyA2cBCFrhAQtNyt1Zv7g'
    );
    const data = await response.json();
    return data;
  }
}
