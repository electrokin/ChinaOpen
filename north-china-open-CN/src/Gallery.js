import React, { Component } from 'react';

import './gallery.css';

class Gallery extends Component {

  getGalleryItem = () => {

    let random_images_array = ["g1", "g2", "g3", "g4", "g2", "g1" ]
    let random_size_array = ["GalleryItemSmall", "GalleryItemLarge", "GalleryItemWide", "GalleryItemTall"]
    
    let gIdNum = Math.floor(Math.random() * random_images_array.length);
    let gSizeNum = Math.floor(Math.random() * random_size_array.length);
    
    let gId = random_images_array[gIdNum];
    let gSize = random_size_array[gSizeNum];

    let galleryElement = <div className={"GalleryItem " + gSize} id={gId}></div>;
    
    return(galleryElement);
  }

  render() {

    return (

      <div className="Gallery">
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
        {this.getGalleryItem()}
      </div>
        
    );
  }
}

export default Gallery;
