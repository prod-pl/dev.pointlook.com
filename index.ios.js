import React, { TouchableHighlight, Text, View, AppRegistry, StyleSheet } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

var StopWatch = React.createClass({
    getInitialState: function() {
                     return {
                            running: false,
                            timeElapsed: null,
                            startTime: null,
                            laps: []
                        }
                     },
    render: function() {
                return <View style={styles.container}>
                    <View style={[styles.header, this.border('yellow')]}>
                        <View style={[styles.timerWrapper, this.border('red')]}>
                            <Text style={styles.timer}>
                                {formatTime(this.state.timeElapsed)}
                            </Text>
                        </View>
                        <View style={[styles.buttonWrapper, this.border('green')]}>
                            {this.startStopButton()}
                            {this.lapButton()}
                        </View>
                    </View>
                    <View style={[styles.footer, this.border('blue')]}>
                        {this.laps()}
                    </View>
                </View>
            },
            laps: function() {
                    return this.state.laps.map(function(time, index){
                        return <View style={styles.lap}>
                            <Text style={styles.lapText} key={index}>
                                Lap #{index + 1}:
                            </Text>
                            <Text style={styles.lapText}>
                                {formatTime(time)}
                            </Text>
                        </View>
                    });
            },
            startStopButton: function() {
                    var styleStartStop = this.state.running ? styles.stopButton : styles.startButton;

                    return (
                            <TouchableHighlight
                                underlayColor='gray'
                                onPress={this.handleStartPress}
                                style={[styles.button, styleStartStop]}
                                >
                        <Text>
                            { this.state.running ? 'STOP' : 'START' }
                        </Text>
                    </TouchableHighlight>
                    );
            },
    lapButton: function() {
                    return <TouchableHighlight
                        underlayColor='gray'
                        onPress={this.handleLapPress}
                        style={styles.button}
                        >
                        <Text>
                            Lap
                        </Text>
                    </TouchableHighlight>
            },
    handleStartPress: function(){
                if (this.state.running) {
                    clearInterval(this.interval);
                    this.setState({ running: false });
                    return
                }

                this.setState({startTime : new Date()});
                this.interval = setInterval(() => {
                        this.setState({
                            timeElapsed: new Date() - this.state.startTime,
                            running: true
                        });
                    }, 30);
            },
    handleLapPress: function(){
                var lapTime = this.state.timeElapsed;
                if (this.state.running) {
                    this.setState({
                        startTime: new Date(),
                        laps: this.state.laps.concat([lapTime])
                    });
                } else {
                    this.setState({
                        startTime: null,
                        timeElapsed: null,
                        laps: []
                    });
                }
           },
    border: function(color) {
                return {
                    borderColor: color,
                    borderWidth: 2

                }
           }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
               },
    header: {
        flex: 1
            },
    footer: {
        flex: 1
            },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
                  },
    buttonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
                   },
    timer:  {
                fontSize: 60
            },
    button: {
                borderWidth: 2,
                height: 100,
                width: 100,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center'
            },
    startButton: {
                borderColor: '#00CC00'
            },
    stopButton: {
                borderColor: '#CC0000'
            },
    lap: {
            justifyContent: 'space-around',
            flexDirection: 'row'
         },
    lapText: {
                 fontSize: 30
             }
});

AppRegistry.registerComponent('PointLook', () => StopWatch );
