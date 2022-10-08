import { View, Text, Button, StyleSheet } from "react-native";

export default function Task (props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text>{props.text}</Text>
            </View>
            <View style={styles.itemRight}>
                <Button title='Delete' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        backgroundColor: "#e8e8e8",
        padding: 15,
        borderRadius: 10,
        aliginItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom : 5,
    },
    
    itemRight : {
        borderBottomColor : "#eb4034",
    },
    itemLeft : {
        aliginItems: 'center',
    }
    

})