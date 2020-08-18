// https://create-react-app.dev/docs/running-tests/
import Books from './Books'

const books = new Books()
it('first', () => {
    expect(books.state.bookShelf).toBeInstanceOf(Array)
    expect(books.state.bookShelf).toHaveLength(3)
})
xit('second', () => {
    expect(books.state.newBook).toBeInstanceOf(Object)
})