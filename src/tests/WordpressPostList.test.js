import { within, render, screen } from "@testing-library/react"
import WordpressPostList from "../components/WordpressPostList"


test('WordPairList shows a list of Word Pairs', async() =>{
     render(<WordpressPostList posts={[{content : "test", wordCountMap : [{word: "test", frequency: 5}, {word: "nanu", frequency: 3}]}, {content : "test", wordCountMap : [{word: "test", frequency: 5}, {word: "nanu", frequency: 3}]},{content : "miau", wordCountMap : [{word: "test", frequency: 5}, {word: "nanu", frequency: 3}]}]}/>)
     expect(await screen.getAllByTestId('wordPairList')).toHaveLength(3)
     expect(await screen.getAllByText('test')).toHaveLength(2)
     expect(await screen.getAllByText('miau')).toHaveLength(1)
})