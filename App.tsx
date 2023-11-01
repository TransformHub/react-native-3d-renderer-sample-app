/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RTNThreedRenderer from 'rtn-3d-renderer/js/RTNThreedRendererNativeComponent';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {Platform.OS === 'android' && (
        <RTNThreedRenderer
          fileNameWithExtension="cylinder.glb"
          url="some_sample_url_where_your_glb_model_is_hosted" //Add your own url, this will not work
          animationCount={0}
          style={{width: '100%', height: '100%'}}
        />
      )}
      {Platform.OS === 'ios' && (
        <RTNThreedRenderer
          fileNameWithExtension="toy.usdz"
          url="https://developer.apple.com/augmented-reality/quick-look/models/toycar/toy_car.usdz"
          style={{width: '100%', height: '100%'}}
        />
      )}
    </SafeAreaView>
  );
}

export default App;
