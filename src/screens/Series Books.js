import React, { useEffect } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import tw from "tailwind-react-native-classnames";

import { useSelector, useDispatch } from "react-redux";
import { booksSelector, fetchBooks } from "../slices/books";

export default function SeriesBooks() {
  const dispatch = useDispatch();
  const { loading, hasErrors, books } = useSelector(booksSelector);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  console.log("books", books[9]);
  return (
    <ScrollView>
      {books[9]?.books.map((book) => (
        <TouchableOpacity key={book.book_uri}>
          <Image
            style={styles.books}
            source={{
              uri: book.book_image,
            }}
          />
          <Text style={tw`capitalize`}>{book?.title}</Text>
          <Text>{book?.author}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  books: {
    width: 50,
    height: 50,
  },
});
