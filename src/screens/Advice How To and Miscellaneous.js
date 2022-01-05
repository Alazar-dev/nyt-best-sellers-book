import React, { useEffect } from "react";
import BookDetail from "../components/modals/BookDetail";
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

export default function AdviceHowToAndMiscellaneous() {
  const dispatch = useDispatch();
  const { loading, hasErrors, books } = useSelector(booksSelector);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  console.log("books", books[6]);
  return (
    <ScrollView>
      {books[6]?.books.map((book) => (
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
      <BookDetail />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  books: {
    width: 50,
    height: 50,
  },
});
