const axios = require('axios');

class AjaxButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleHello = this.handleHello.bind(this);
        this.handleGetInfo = this.handleGetInfo.bind(this);
        this.state = {
            numbers: [],
            testVar: 'nothing'
        }
    }

    handleHello() {
        axios.get('/sayhello')
        .then((response) => {
          alert(response);
        })
        .catch((error) => {
          alert(error)
        })
        .then(() => {
      
        });
    }

    handleGetInfo() {
        axios.get('/returnobject')
        .then((response) => {
          this.setState(() => {
            return {
                numbers: response.data
            }
          });
        })
        .catch((error) => {
          console.log(error)
          //return "Didn't work";
        })
        .then(() => {
          console.log('Request sent');
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleHello}>Say hi to the server.</button>
                <button onClick={this.handleGetInfo}>Get some numbers from the server.</button>
                <h3>Numbers: {this.state.numbers}</h3>
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