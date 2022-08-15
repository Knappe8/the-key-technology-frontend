import { within, render, screen } from "@testing-library/react"
import WordpressPost from "../components/WordpressPost"


test('WordPairList shows a list of Word Pairs', async() =>{
     render(<WordpressPost content={"Test"} wordCountMap={[{word: "test", frequency: 5}, {word: "nanu", frequency: 3}]}/>)
     expect(await within(screen.getByTestId('wordPairList')).getAllByTestId('wordPair')).toHaveLength(2)
     expect(await screen.getAllByText('Test')).toHaveLength(1)
})