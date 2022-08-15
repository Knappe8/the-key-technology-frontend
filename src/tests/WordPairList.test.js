import { within, render, screen } from "@testing-library/react"
import WordPairList from "../components/wordcountmap/WordPairList"

test('WordPairList shows a list of Word Pairs', async() =>{
     render(<WordPairList wordList={[{word: "test", frequency: 5}, {word: "nanu", frequency: 3}]}/>)
     expect(await within(screen.getByTestId('wordPairList')).getAllByTestId('wordPair')).toHaveLength(2)
})