
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import {FaFacebook} from 'react-icons/fa';
const HeroSection = () => {
  const [selected, setSelected] = useState('TR');
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
}
  return (
    <div className="w-full h-[500px] bg-secondary">

      <div className=" md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-10">
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="Getir Banner"
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde kapınızda
          </h3>
        </div>

        <div className="w-full sm:w-[400px] bg-gray-50 sm:rounded-lg px-5 py-3 pb-5 sm:py-6">
						<h3 className="text-center mb-4 font-semibold text-secondary">Giriş yap veya kayıt ol</h3>
						<div className="flex flex-col gap-y-3">
							<div className="flex gap-x-3">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={code => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="flex-1 relative group block cursor-pointer">
              <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary focus:border-primary outline-none peer text-sm pt-2" />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary peer-valid:text-xs">Telefon Numarası</span>
            </label>
          </div>
          <button className="h-12 rounded-lg transition-colors cursor-pointer bg-yellow-300 text-secondary text-sm font-semibold hover:bg-secondary hover:text-yellow-300">
								Telefon numarası ile devam et
							</button>
        </div>
      </div>
    </div>
</div>

  );
}

export default HeroSection