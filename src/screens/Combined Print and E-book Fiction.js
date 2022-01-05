import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import BookDetail from "../components/modals/BookDetail";

import { useSelector, useDispatch } from "react-redux";
import { booksSelector, fetchBooks } from "../slices/books";

export default function CombinedPrintAndEBookFiction() {
  const dispatch = useDispatch();
  const [isBookDetail, setIsBookDetail] = useState(false);
  const { loading, hasErrors, books } = useSelector(booksSelector);
  const [bookImg, setBookImg] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDescription, setBookDescription] = useState(null);

  const handleBookDetailConfirm = () => {
    setIsBookDetail(false);
  };

  const handlePress = () => {
    setIsBookDetail(true);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  console.log("books", books[0]);
  return (
    <ScrollView>
      {books[0]?.books.map((book) => (
        <TouchableOpacity
          key={book.book_uri}
          onPress={() => {
            setBookImg(book.book_image);
            setBookTitle(book.title);
            setBookAuthor(book.author);
            setIsBookDetail(true);
          }}
        >
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
      <BookDetail
        image={bookImg}
        author={bookAuthor}
        title={bookTitle}
        message={"Have a cup of coffee!"}
        visible={isBookDetail}
        onConfirm={handleBookDetailConfirm}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  books: {
    width: 50,
    height: 50,
  },
});
