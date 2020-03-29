import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
    state = {
        lat: null,
        errMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        );
    };

    renderContent() {
        if (this.state.errMessage && !this.state.lat) {
            return (<div><h1>Error: {this.state.errMessage}</h1></div>);
        };
        if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <LoadingSpinner message="Awaiting Target Lock" />
    };

    render() {
        return <div>{this.renderContent()}</div>
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);