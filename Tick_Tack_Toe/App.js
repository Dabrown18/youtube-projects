import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native';
import cloneDeep from 'lodash/cloneDeep';

const {height} = Dimensions.get('window');
const logoUrl = 'https://geekmode.tech/wp-content/uploads/2022/02/logo-blue-with-icon.png';

const App = () => {
  const boxes = ['','','','','','','','',''];
  const [array, setArray] = useState(boxes);
  const [tikTackTow, setTickTackTow] = useState('');

  const horizontal = (tempArray, value) => {
    if (tempArray[0] === value && tempArray[1] === value && tempArray[2] === value) {
      return setTickTackTow('Winner!');
    }
    if (tempArray[3] === value && tempArray[4] === value && tempArray[5] === value) {
      return setTickTackTow('Winner!');
    }
    if (tempArray[6] === value && tempArray[7] === value && tempArray[8] === value) {
      return setTickTackTow('Winner!');
    }

    return setTickTackTow('');
  };

  const vertical = (tempArray, value) => {
    if (tempArray[0] === value && tempArray[3] === value && tempArray[6] === value) {
      return setTickTackTow('Winner!');
    }
    if (tempArray[1] === value && tempArray[4] === value && tempArray[7] === value) {
      return setTickTackTow('Winner!');
    }
    if (tempArray[2] === value && tempArray[5] === value && tempArray[8] === value) {
      return setTickTackTow('Winner!');
    }

    return setTickTackTow('');
  };

  const diagonal = (tempArray, value) => {
    if (tempArray[0] === value && tempArray[4] === value && tempArray[8] === value) {
      return setTickTackTow('Winner!');
    }
    if (tempArray[2] === value && tempArray[4] === value && tempArray[6] === value) {
      return setTickTackTow('Winner!');
    }

    return setTickTackTow('');
  };

  const getTheWinner = (tempArray, value) => {
    if (tempArray.length <= 0) {return false;}

    horizontal(tempArray, value);
    vertical(tempArray, value);
    diagonal(tempArray, value);
  };

  const resetGameButtonPressed = () => {
    setArray(boxes);
    setTickTackTow('');
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.tickTackToeContainer}>
          <FlatList
            numColumns={3}
            keyExtractor={(item, index) => index }
            data={array}
            renderItem={({item, index}) => {

              return (
                <TouchableOpacity
                  style={styles.boxContainer}
                  onPress={() => {
                    let value = array[index] === '' ? 'O'
                      : array[index] === 'O' ? 'X' : 'O';

                    array[index] = value;
                    let newBoxes = cloneDeep(array);
                    setArray(newBoxes);
                    getTheWinner(newBoxes, value);
                  }}
                >
                  <Text style={styles.selection}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.logoStyle} source={{uri: logoUrl}} />
        </View>
        <View style={styles.resetButtonContainer}>
          <TouchableOpacity onPress={resetGameButtonPressed} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Game</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex:0,
    backgroundColor: 'navy',
  },
  screenContainer: {
    flex: 1,
  },
  tickTackToeContainer: {
    backgroundColor: 'navy',
    borderBottomWidth: 5,
    borderBottomColor: 'orange',
  },
  boxContainer: {
    borderWidth: 5,
    borderColor: 'orange',
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  selection: {
    fontSize: 50,
  },
  resetButtonContainer: {
    borderTopWidth: 5,
    borderTopColor: 'navy',
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
  },
  resetButton: {
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 325,
    height: 59,
    bottom: height * 0.05,
  },
});

export default App;
