import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector, fetchBookCategories } from "../slices/categories";
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const { loading, hasErrors, categories } = useSelector(categoriesSelector);

  useEffect(() => {
    dispatch(fetchBookCategories());
  }, []);

  return (
    <ScrollView>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        categories?.map((category) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(category.list_name)}
            key={category.list_id}
          >
            <Image
              style={styles.categories}
              source={{
                uri: category.list_image,
              }}
            />
            <Text>{category.list_name}</Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categories: {
    height: 50,
    width: 50,
  },
});
