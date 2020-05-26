import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = ()=> {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType ='slide'>
            <View style={styles.inputCOntainer}>
                <TextInput placeholder="Enter goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttons}><Button  title="Cancel" color="red" onPress={props.onCancel} /></View>
                    <View style={styles.buttons}><Button title="Add" onPress={addGoalHandler} /></View>
                </View>
                
            </View>
        </Modal>
    );
};

export default GoalInput

const styles = StyleSheet.create({
    inputCOntainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin:10

    },
    buttonsContainer:{
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    },
    buttons:{
        width: '40%'
    }
});