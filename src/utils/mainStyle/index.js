import {StyleSheet} from 'react-native';
const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topbar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#CCC',
  },
  topbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default mainStyle;
