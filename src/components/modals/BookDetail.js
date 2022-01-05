import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Modal from "react-native-modal";
import tw from "tailwind-react-native-classnames";

export default function BookDetail({
  author,
  title,
  description,
  image,
  visible,
  onConfirm,
}) {
  return (
    <View>
      <Modal
        style={tw`flex flex-col justify-between items-center bg-white rounded-xl`}
        isVisible={visible}
        backdropTransitionOutTiming={0}
      >
        <View>
          <Image
            style={tw`w-80 h-96`}
            source={{
              uri: image,
            }}
          />
          <View style={`flex flex-row`}>
            <Text>Author: {author}</Text>
          </View>
          <Text>{description}</Text>
        </View>
        <TouchableOpacity
          style={tw`w-40 flex flex-row justify-center m-4`}
          onPress={onConfirm}
        >
          <Text style={tw`text-sm`}>Close</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
