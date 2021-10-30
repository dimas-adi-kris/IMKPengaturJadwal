import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton} from 'react-router-native';
import SelectDropdown from 'react-native-select-dropdown';
import mainStyle from '../../../../utils/mainStyle';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
const ScheduleAdd = () => {
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text>Halaman tambah semester</Text>
      </View>
      <View style={styles.addSemester}>
        <Text>make it like it never happened</Text>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
      <BackButton />
    </View>
  );
};
export default ScheduleAdd;

const styles = StyleSheet.create({
  addSemester: {flex: 1, backgroundColor: 'green'},
});
