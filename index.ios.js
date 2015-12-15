'use strict';

var React = require('react-native');
var Spinner = require('./xspinner');

var {
    View,
    AppRegistry,
    StyleSheet,
    } = React;

var xspinner = React.createClass({
  getInitialState: function () {
    return {
      step: 1,
      enabled: true
    }
  },
  render: function () {
    var t = this
    setTimeout(function(){
      t.setState({
        step: 10,
        enabled: false
      })
    }, 2000)

    var step = {
      '2015-10-1': '国庆节',
      '2015-9-10': '教师节',
      '2016-1-1': '元旦节',
      '2015-11-11': '双十一'
    };
    var check = {
      '2015-10-1': 'checked',
      '2015-9-1': 'checked',
      '2015-7-10': 'checked',
      '2015-9-10': 'checked'
    };
    var headerStyle = {
      backgroundColor: '#3C9BFD',
      color: '#fff',
      fontSize: 15,
      fontWeight: '500',
    };
    return (
        <View style={styles.container}>
          <Spinner
              touchEvent={this.press}
              headerStyle={headerStyle}
              step={this.state.step}
              enabled={this.state.enabled}
              check={check}
          />
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  }
});

AppRegistry.registerComponent('xspinner', () => xspinner);
