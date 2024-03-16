import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {screens} from './utils';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const handleNav = React.useCallback(
    (screen: string) => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      {screens.map(({name}) => (
        <Button key={name} title={name} onPress={() => handleNav(name)} />
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
