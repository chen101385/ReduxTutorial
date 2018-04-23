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
            <div>
            <input 
            value = {this.state.term}
            onChange = {e => this.setState({term: e.target.value})} 
            />
            </div>
        )
    }

    // onInputChange(e) {
    //     console.log(e.target.value)
    // }
}

export default SearchBar;