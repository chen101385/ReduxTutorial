import React, {Component} from 'react';

//functional stateless component

// const SearchBar = () => {
//     //generate HTML input;
//     return <input />
// };

//class-based stateful component

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return <input onChange={(e) => console.log(e.target.value)}/>
    }

    // onInputChange(e) {
    //     console.log(e.target.value)
    // }
}

export default SearchBar;