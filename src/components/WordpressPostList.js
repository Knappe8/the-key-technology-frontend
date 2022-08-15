import React, {Component} from 'react';
import WordpressPost from './WordpressPost';
import Container from 'react-bootstrap/Container'

/**
 * Component that shows all given Wordpress posts and their corresponding word count maps.
 */
class WordpressPostList extends Component{
    constructor(){
        super();
       
    }
    render(){
      
        return  <Container className='wordpressPostList'>
                    {this.props.posts.map( (post, index) => <WordpressPost key={index} content={post.content} wordCountMap={post.wordCountMap}/>)}
                </Container>
    }
}

export default WordpressPostList;
