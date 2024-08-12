import { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { SurahInterface } from '../interfaces/SurahInterface';
import { globals } from '../styles';

export interface ModalRef {
  openModal: (data: any) => void;
  closeModal: () => void;
}

export const ModalComponent = forwardRef<ModalRef, {modalContent: Function}>((props, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>();
  const modalContent = () => props.modalContent();

  // This function will be callable by the parent component.
  const openModal = (data: Array<SurahInterface>) => {
    setModalData(data); // Use the data passed by parent.
    setIsVisible(true);
  };

  // This function will be callable by the parent component.
  const closeModal = () => {
    setIsVisible(false);
  };

  // Expose the `openModal` and `closeModal` functions to parent component.
  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          // onBackdropPress={closeModal}
          style={styles.modalView}
          animationType="slide"
          transparent={true}
          visible={isVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {modalContent()}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={closeModal}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "50%",
    marginHorizontal: 50,
    borderRadius: 30,
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    backgroundColor: globals.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    marginVertical: 50,
    paddingHorizontal: 40,
    backgroundColor: globals.primaryColor,
    borderRadius: 20,
    paddingVertical: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 12,
    marginTop: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: globals.secondaryColor,
  },
  textStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
