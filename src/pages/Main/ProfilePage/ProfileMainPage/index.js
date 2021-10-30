import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfilePic} from '../../../../assets';
import {BottomBar, ProfileMenu} from '../../../../components/molecules';
import {colors} from '../../../../utils';
import mainStyle from '../../../../utils/mainStyle';

const ProfilePage = ({history}) => {
  return (
    <View style={styles.profile}>
      <View style={styles.profilePreview}>
        <Image source={ProfilePic} style={styles.avatar} />
        <Text style={styles.name}>Dimas</Text>
      </View>
      <ProfileMenu />
      <BottomBar history={history} />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
  profilePreview: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 24,
    color: colors.mainColors.dark[800],
    // colors.mainColors.dark[800],
    marginTop: 13,
  },
});
