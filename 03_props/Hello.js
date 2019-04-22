class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1,
        img: 'https://images.unsplash.com/photo-1490033616401-d28cb9392a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    }
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}