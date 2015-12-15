'use strict'

// TODO disable/enable get/set

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
            val: 0,
            activeOpacity: 1
        }
    },
    add: function () {
        opearte.call(this, 1)
    },
    sub: function () {
        opearte.call(this, -1)
    },
    render: function () {
        var st = this.state,
            pr = this.props

        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.btn, styles.btnSub]} onPress={this.sub} activeOpacity={pr.enabled ? 0.5 : 1}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.content}>{this.state.val}</Text>
                <TouchableOpacity style={[styles.btn, styles.btnAdd]} onPress={this.add} activeOpacity={pr.enabled ? 0.5 : 1}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
})

function opearte(direction){
    this.setState(function(previousState, currentProps) {
        if(currentProps.enabled){
            var step = parseFloat(currentProps.step),
                maxStepDigit = 10

            step = isNaN(step) ? 1 : step
            return {val: parseFloat((previousState.val + step * direction).toPrecision(maxStepDigit))}
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
        color: "#00AFC7",
        textAlign: 'center',
    },
    btn: {
        width: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: '#ddd',
    },
    btnText: {
        color: "#00AFC7",
        textAlign: 'center',
    },
    btnAdd: {
        borderLeftWidth: 1,
    },
    btnSub: {
        borderRightWidth: 1,
    }
})

module.exports = Calendar