import { useState } from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS } from "../../../constants";
import { styles } from "./dropdownComponent.style";

const DropdownComponent = ({
  categories,
  difficulty,
  setDifficultyLevel,
  setCategoryId,
}) => {
  const [value, setValue] = useState(null);

  const data = categories?.map((category) => {
    let str = category.name;
    if (str.includes("Entertainment:")) {
      str = str.replace(new RegExp("Entertainment: ", "g"), "");
    }
    return { label: str, value: category.id };
  });

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemContainerStyle={styles.itemContainerStyle}
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.itemTextStyle}
        activeColor={COLORS.primary}
        data={data || difficulty}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Select item"}
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
          if (categories) setCategoryId(item.value);
          if (difficulty) setDifficultyLevel(item.label);
        }}
      />
    </View>
  );
};

export default DropdownComponent;
