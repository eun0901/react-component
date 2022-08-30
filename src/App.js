import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const Button = (props) => {
    return (
        <Pressable
        style={{padding: 10, backgrounColor: '#1abc9c'}}
        onPressIn={() => console.log('Press In')}
        onPressOut={() => console.log('Press Out')}
        onPress={() => console.log('Press')}
        onLongPress={() => console.log('Long Press')}
        delayLongPress={3000}
        pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 20}} hitSlop={50}>
            <Text style={{padding: 10, fontSize: 30}}>{props.title}</Text>
        </Pressable>
    );
};

const App = () => {
    return (
        <View
        style={{
            flex: 1,
            backgroundColor:'#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
            <Counter />
            <EventButton />
            <EventInput />
            <Button title="Pressable" />
        </View>
    );
};

export default App;