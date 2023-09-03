import React, { useState } from 'react';

import img1 from '../img/gallery/img1.jpeg';
import img2 from '../img/gallery/img2.jpeg';
import img3 from '../img/gallery/img3.jpeg';
import img4 from '../img/gallery/img4.jpeg';
import img5 from '../img/gallery/img5.jpeg';
import img6 from '../img/gallery/img6.jpeg';
import img7 from '../img/gallery/img7.jpg';
import img8 from '../img/gallery/img8.jpg';
import img9 from '../img/gallery/img9.jpg';
import img10 from '../img/gallery/img10.jpg';
import img11 from '../img/gallery/img11.jpg';
import img12 from '../img/gallery/image1.jpg';
import img13 from '../img/gallery/image2.jpg';
import img14 from '../img/gallery/image3.jpg';
import img15 from '../img/gallery/image4.jpg';
import img16 from '../img/gallery/image5.jpg';

const imageUrls = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15
];

const ImageGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openModal(imageUrl)}>
            <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
