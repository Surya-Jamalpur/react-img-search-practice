import React from 'react';

class Search extends React.Component {
    state = { searchValue: '' }
    onSearchValueChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }
    onSearch(event) {
        event.preventDefault();
        console.log(this.state.searchValue);
        this.props.onSearchSubmit(this.state.searchValue);
    }
    render() {
        return (
            <div className="searchBar">
                <form autoComplete='off' onSubmit={(event) => this.onSearch(event)}>
                    <label htmlFor="searchBar">Search Images : </label>
                    <input
                        id="searchBar"
                        onChange={this.onSearchValueChange}
                        value={this.state.searchValue}
                    />
                </form>

            </div>
        )
    }
}
export default Search;