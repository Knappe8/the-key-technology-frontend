import React, {Component} from 'react'
import WordPairList from './WordPairList'
import Col from 'react-bootstrap/Col'

/**
 * Component that displays a word count map with a header.
 */
class WordCountMap extends Component{
    render() {
        return <Col md='4'>
            <h2>Word Count Map</h2>
            <WordPairList wordList={this.props.wordCountMap}/>
        </Col>
       
    }
}

export default WordCountMap