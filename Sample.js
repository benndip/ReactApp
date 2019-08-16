import React from 'react';
import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image

} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default class Sample extends React.Component {

    constructor(Props) {
        super(Props);
    }
    render() {
        let sreenWidth = Dimensions.get('window').width;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.view1}></View>
                    <View style={styles.all}>
                        <Image
                            style={styles.stretch}
                            source={require('')}
                        />
                        <Icon name="jpgfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="wordfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="jpgfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="filetext1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="wordfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="wordfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="wordfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="wordfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="filetext1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="filetext1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                    <View style={styles.all}>
                        <Icon name="close" style={styles.tilex} />
                        <Icon name="wordfile1" style={styles.tilex} />
                        <Icon name="infocirlce" style={styles.tilex} />
                        <Text style={styles.text}>Event And Animation</Text>
                        <Icon name="down" style={styles.tilex1} />
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "rgba(238,220,235,7)",
    },
    view1: {
        width: 355,
        height: 50,
        backgroundColor: 'white',
        borderTopStartRadius: 14,
        borderTopEndRadius: 14

    },
    all: {
        flexDirection: 'row',
        width: 350,
        height: 50,
        backgroundColor: 'white',
        marginVertical: 6,
        borderRadius: 10,
        alignItems: 'center'

    },
    tilex: {
        color: "black",
        fontSize: 20,

    },
    text: {
        fontSize: 10,
        marginLeft: 7,
    },
    tilex1: {
        color: "black",
        fontSize: 10,
        marginHorizontal: 160
    },

})