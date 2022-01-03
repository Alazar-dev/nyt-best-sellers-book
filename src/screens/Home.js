import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector, fetchBookCategories } from "../slices/categories";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Home() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);

  const { loading, hasErrors, categories } = useSelector(categoriesSelector);

  useEffect(async () => {
    dispatch(fetchBookCategories());
    console.log("categories", categories);
  }, []);
  return (
    <ScrollView>
      <View>
        <Text>Homes</Text>
        {books?.results?.lists?.map((book) => (
          <TouchableOpacity key={book.list_id}>
            <Image
              style={styles.books}
              source={{
                uri: book.list_image,
              }}
            />
            <Text>{book.list_name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  books: {
    height: 50,
    width: 50,
  },
});
