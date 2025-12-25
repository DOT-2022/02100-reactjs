import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {

    render(){
        const searchProps = this.props
        return (
            <input 
                className= {searchProps.className}
                type='search' 
                placeholder={searchProps.placeholder} 
                onChange={searchProps.onChangeHandler} />
        )
    }
}

export default SearchBox