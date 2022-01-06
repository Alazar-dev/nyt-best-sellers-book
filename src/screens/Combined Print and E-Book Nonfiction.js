import React, { useEffect, useState } from "react";
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
import BookDetail from "../components/modals/BookDetail";

export default function CombinedPrintAndEBookNonfiction() {
  const dispatch = useDispatch();
  const { loading, hasErrors, books } = useSelector(booksSelector);
  const [isDetail, setIsDetail] = useState(false);
  const [img, BookImg] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState(null);

  function handleDetailConfirm() {
    setIsDetail(false);
  }

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  console.log("books", books[1]);
  return (
    <ScrollView>
      {books[1]?.books.map((book) => (
        <TouchableOpacity
          key={book.book_uri}
          onPress={() => {
            BookImg(book.book_image);
            setAuthor(book.author);
            setDescription(book.description);
            setIsDetail(true);
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
        image={img}
        author={author}
        description={description}
        visible={isDetail}
        onConfirm={handleDetailConfirm}
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
