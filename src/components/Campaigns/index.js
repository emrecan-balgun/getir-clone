import { useState, useEffect } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Banners from 'api/banners.json';

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
      setBanners(Banners);
  }, [])


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div className="container mx-auto">
      <Slider className="md:-mx-2" {...settings}>
        {banners.length && banners.map((banner) => (
            <div key={banner.id}>
                <picture className="block md:px-2">
                    <img src={banner.image} className="md:rounded-lg" />
                </picture>
            </div>
        ))}
      </Slider>
    </div>
  )
}