import React, {Component} from 'react';
import WordCountMap from './wordcountmap/WordCountMap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Component that displays the content of a Wordpress Post and it's corresponding word count map in a bootstrap grid
 */
class WordpressPost extends Component{
    
    render(){
        return  <Row className='wordpressPost'>
                    <Col md='8' className='wordpressPostContent' dangerouslySetInnerHTML={{__html: this.props.content}}></Col>
                    <WordCountMap wordCountMap={this.props.wordCountMap}/>
                </Row>
    }
}

export default WordpressPost;