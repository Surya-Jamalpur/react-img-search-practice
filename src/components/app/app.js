import React from 'react';
import Search from '../search/search';
import unsplash from '../../apis/unsplash';
import ImageList from '../imageList/imageList'

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async (inVal) => {
        console.log(inVal);
        const searchResult = await unsplash.get('/search/photos', {
            params: {
                query: inVal
            }
        });
        this.setState({ images: searchResult.data.results })
    }
    render() {
        return (
            <div>
                <h1>Hi App..</h1>
                <Search onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;