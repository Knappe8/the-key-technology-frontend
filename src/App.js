import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import WordpressPostList from './components/WordpressPostList';
import {Component} from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";


/**
 * App, that displays Wordpress posts and their corresponding word count maps. 
 * The posts and maps are given by an foreign server over a websocket connection.
 */
class App extends Component{
  constructor(){
    super();
    this.state = {
      posts : []
    }
  }
  //Verbinden zu Websocket -> Hostname auf Port 8000
  //Ersetzen der Posts, wenn neue Daten eintreffen
  componentDidMount() {
    const client = new W3CWebSocket('ws://'+window.location.hostname+':8000');
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      this.setState({
        posts: JSON.parse(message.data)
      })
      console.log(message);
    };
  }
  render() {
    return (
      <div className="App">
       
        {this.state.posts== [] ? <h2>Derzeit sind keine Posts verfügbar.</h2>:<WordpressPostList posts={this.state.posts}/>}
      </div>
    );
  }
}

export default App;
