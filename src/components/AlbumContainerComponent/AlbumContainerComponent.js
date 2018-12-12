import React, { Component } from 'react';
import './AlbumContainerComponent.css';
import AlbumComponent from '../AlbumComponent/AlbumComponent.js';

class AlbumContainerComponent extends Component {
    render() {
        var albumList = [
            {
                imgsrc: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5708/5708825_sa.jpg",
                title: "Dark Side of the Moon",
                artist: "Pink Floyd"
            },
            {
                imgsrc: "https://www.fye.com/dw/image/v2/BBNF_PRD/on/demandware.static/-/Sites-fye-master/default/dw008227f5/aec/atl/atl535/aec.atl535339.2_0.jpg?sw=584",
                title: "Physical Graffiti",
                artist: "Led Zeppelin"
            }
        ];

        return (
            <div className="album-container-div">
                {albumList.map(result => (
                    <AlbumComponent
                        imgsrc={result.imgsrc}
                        title={result.title}
                        artist={result.artist}
                    />
                ))}
            </div>
        );
    }
}

export default AlbumContainerComponent;