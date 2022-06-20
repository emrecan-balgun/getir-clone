import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CountriesPhoneCode from './phones.json';

import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = CountriesPhoneCode;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
      <div>
        <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="" />
      </div>
      <div>
        <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="" />
      </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div>
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
            <h3 className="mt-8 text-4xl font-semibold text-white">
              Dakikalar içinde <br />kapınızda
            </h3>
          </div>
          <div className="w-[400px] rounded-lg bg-gray-50 p-6">
            <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
            <div className="flex">
              <ReactFlagsSelect
                  countries={Object.keys(phones)}
                  customLabels={phones}
                  selected={selected}
                  onSelect={code => setSelected(code)}
                  className="flag-select"
              />
              <div className="flex-1">
                <input className="h-14 px-4 border-2 border-gray-200 rounded-lg w-full" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}