const axio = require('axios');

class AjaxButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleHello = this.handleHello.bind();
    }

    componentDidMount() {

    }
    
    handleHello() {
        console.log("Let's say hi to the server!");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleHello}>Say hi to the server.</button>
                <button>Get the server's uptime.</button>
                <h3>Server uptime: Unknown</h3>
            </div>
        );
    }
}

class AjaxApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Ajax Test App</h1>
                <h2>Try clicking on the buttons below to see if the server is listening.</h2>
                <AjaxButtons />
            </div>
        );
    }
}

export default AjaxApp