import React, { Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            users: []
        }
    }

    async fetchUsers() {
        try {
            const req = await fetch(this.props.apiLink);
            const res = await req.json();
            const reduced = res.slice(0, this.props.amount)
            this.setState({
                loading: false,
                users: this.props.amount ? reduced : res
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, this.fetchUsers)
    }

    render() {
        return this.props.render(this.state);
    }
}

export default Card