import React, {Component} from 'react'
/**
 * Component that displays a Word and how often it appears in a given text.
 */
class WordPair extends Component{

    render() {
        return <div data-testid='wordPair'>
            {this.props.word} : {this.props.frequency}
        </div>
    }
}

export default WordPair