'use strict';

var React = require('react-native');
var Spinner = require('./xspinner');

var {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    SwitchIOS,
    } = React;

var xspinner = React.createClass({
    getInitialState: function () {
        return {
            step: '1',
            enabled: true,
            spinnerVal: '5',
            settedSpinnerVal: '5'
        }
    },
    getSpinnerValue: function(val){
        this.setState({spinnerVal: val})
    },
    render: function () {
        return (
            <View style={styles.container}>
                <Spinner
                    value={this.state.spinnerVal}
                    step={this.state.step}
                    enabled={this.state.enabled}
                    onChange={this.getSpinnerValue}
                />

                <View style={styles.operation}>
                    <Text>设置step</Text>
                    <TextInput
                        style={[styles.opeComponent, styles.input]}
                        onChangeText={(text) => this.setState({step: text})}
                        value={this.state.step}
                    />
                </View>

                <View style={styles.operation}>
                    <Text>Set value</Text>
                    <TextInput
                        style={[styles.opeComponent, styles.input]}
                        onChangeText={(text) => this.setState({spinnerVal: text})}
                        value={String(this.state.settedSpinnerVal)}
                    />
                </View>

                <View style={styles.operation}>
                    <Text>Get value</Text>
                    <Text style={styles.opeComponent}>
                        {this.state.spinnerVal}
                    </Text>
                </View>

                <View style={styles.operation}>
                    <Text>设置enabled</Text>
                    <SwitchIOS
                        style={styles.opeComponent}
                        onValueChange={(value) => this.setState({enabled: value})}
                        value={this.state.enabled} />
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    operation: {
        marginTop: 20
    },
    opeComponent: {
        marginTop: 5
    },
    input: {
        height: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
});

AppRegistry.registerComponent('xspinner', () => xspinner);
