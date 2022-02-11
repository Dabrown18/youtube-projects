import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {options} from './settingOptions';
import localized from './src/localization/getLocal';

const App = () => {
  const renderOptions = options.map((val, i) => {
    return (
      <TouchableOpacity key={i} style={styles.optionContainer}>
        <Text style={styles.text}>{localized(val.option)}</Text>
      </TouchableOpacity>
    )
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={[styles.text, styles.header]}>{localized('home_page.settings')}</Text>
        </View>
        {renderOptions}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102D66',
  },
  content: {
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,

  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
  optionContainer: {
    padding: 15,
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5
  }
})

export default App;