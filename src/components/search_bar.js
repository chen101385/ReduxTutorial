import React, { Component } from 'react';

//functional stateless component

// const SearchBar = () => {
//     //generate HTML input;
//     return <input />
// };

//class-based stateful component

class SearchBar extends Component {
    //all class stateful components have a constructor function (props - passed into component)
    constructor(props) {
        //calling parent method (super) with props passed in
        super(props)
        //everytime state changes, component re-renders 
        this.state = {
            term: ''
        }
    }


    render() {
        return (
            <div className="search-bar">
            <input 
            value={this.state.term}
            onChange={e => this.onInputChange(e.target.value)} 
            />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;