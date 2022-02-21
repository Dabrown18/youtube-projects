import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const App = () => {
  const [todos, setTodos] = useState(['Homework', 'Study', 'Sport Practice']);
  const [todo, setTodo] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);

  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  const backgroundColor = isDarkMode ? 'darkslateblue' : 'white';
  const darkModeText = isDarkMode ? 'Turn Dark Mode off' : 'Turn Dark Mode on';

  return (
    <SafeAreaView style={[styles.safeAreaView, { backgroundColor }]}>
      <View style={styles.screenContainer}>
        <TouchableOpacity style={{marginBottom: 20}} onPress={() => setDarkMode(!isDarkMode)}>
          <Text>{darkModeText}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInputStyle}
          value={todo}
          onChangeText={(val) => {
            setTodo(val);
          }}
        />
        <FlatList
          keyExtractor={(item, index) => index}
          data={todos}
          renderItem={({item}) => {
            return (
              <View style={styles.todoTextContainer}>
                <Text style={styles.todoTextStyle}>{item}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  textInputStyle: {
    padding: 15,
    backgroundColor: 'aliceblue',
    marginBottom: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  todoTextContainer: {
    width: '100%',
    height: 40,
    borderBottomColor: 'lightslategrey',
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  todoTextStyle: {
    fontSize: 15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
    paddingBottom: 40,
    width: '100%',
  },
  button: {
    backgroundColor: 'cadetblue',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;
