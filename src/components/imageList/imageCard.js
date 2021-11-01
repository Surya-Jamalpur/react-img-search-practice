import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { urls, description } = this.props.image;
        return (
            <img src={urls.regular} />
        )
    }
}
export default ImageCard;