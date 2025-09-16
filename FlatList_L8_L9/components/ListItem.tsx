import { dataType } from "@/data/appData";
import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


// declare data type for props here
type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
}

const ListItem: React.FC<propsType>= ({item,isSelected,onPress}) => {
  return  <TouchableOpacity onPress={()=>onPress(item)}>
                <View style = {[styles.flatListRow,
                  {
                    backgroundColor: isSelected?
                    colors.primary: colors.secondary
                  }
                ]}>
                  <Text style = {[styles.titleText,
                    {
                      color: isSelected?
                      colors.secondary: colors.primary
                    }
                  ]}>{item.title}</Text>
                </View>
              </TouchableOpacity>;
};

export default ListItem;

const styles = StyleSheet.create({
  
  flatListRow:{
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
