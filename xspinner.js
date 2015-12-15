'use strict'

var React = require('react-native')

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    } = React

var Calendar = React.createClass({
    getInitialState: function () {
        return {
            value: 0,
            activeOpacity: 1,
        }
    },
    add: function () {
        opearte.call(this, 1)
    },
    sub: function () {
        opearte.call(this, -1)
    },
    render: function () {
        var props = this.props

        this.state.value = this.props.value

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.btn, styles.btnSub]}
                    onPress={this.sub}
                    activeOpacity={props.enabled ? 0.5 : 1}>
                    <Text style={[styles.btnText, props.enabled ? {} : styles.btnTextDisabled]}>-</Text>
                </TouchableOpacity>
                <Text style={styles.content}>
                    {this.state.value}
                </Text>
                <TouchableOpacity
                    style={[styles.btn, styles.btnAdd]}
                    onPress={this.add}
                    activeOpacity={props.enabled ? 0.5 : 1}>
                    <Text style={[styles.btnText, props.enabled ? {} : styles.btnTextDisabled]}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
})

function opearte(direction){
    this.setState(function(previousState, currentProps) {
        if(currentProps.enabled){
            var step = parseFloat(currentProps.step),
                value = parseFloat(previousState.value),
                maxStepDigit = 10,
                result

            // calculate
            step = isNaN(step) ? 1 : step
            result = parseFloat((value + step * direction).toPrecision(maxStepDigit))

            // trigger onChange
            this.props.onChange ? this.props.onChange(result) : null

            return {value: result}
        }
    })
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        color: "#00afc7",
        textAlign: 'center',
    },
    btn: {
        width: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: '#ddd',
    },
    btnText: {
        color: "#00afc7",
        textAlign: 'center',
    },
    btnTextDisabled: {
        color: "#aaa",
    },
    btnAdd: {
        borderLeftWidth: 1,
    },
    btnSub: {
        borderRightWidth: 1,
    },
})

module.exports = Calendar