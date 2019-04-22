class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    bangs={4}
                    img="https://images.unsplash.com/photo-1555871158-b84594c7e343?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                />
                <Hello
                    to="Dave"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))