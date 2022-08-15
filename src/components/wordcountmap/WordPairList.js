import React, {Component} from 'react'
import WordPair from './WordPair'

/**
 * Component that displays a list of words and how often they appear. 
 */
class WordPairList extends Component{

    render() {
        return <div className='wordPairList' data-testid="wordPairList">
            {this.props.wordList.map((wordPair, index) => <WordPair key={index} word={wordPair.word} frequency={wordPair.frequency}/>)}
        </div>
    }
}

export default WordPairList