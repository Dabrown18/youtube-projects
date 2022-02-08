import React from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';

const logoUrl = 'https://geekmode.tech/wp-content/uploads/2022/02/logo-blue-with-icon.png';

const WinnerModal = ({closeModal, modalVisible, message}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Image style={styles.imageStyle} source={{uri: logoUrl}} />
          <Text style={styles.winnerText}>{message}</Text>
          <TouchableOpacity
            onPress={closeModal}
            style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderColor: 'orange',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 20,
  },
  imageStyle: {
    width: 325,
    height: 59,
  },
  winnerText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
    marginVertical: 25,
  },
  buttonStyle: {
    backgroundColor: 'navy',
    padding: 15,
    width: '100%',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default WinnerModal;
