

const MobileApp = () => {
  return (
    

    <div className=" container mx-auto my-6  bg-purple-700 flex flex-col sm:flex-row items-center sm:pl-12 justify-between bg-mobile-app rounded-lg">
      <div className="text-white p-5 sm:p-0 text-center sm:text-left">
        <h3 className="text-3xl	tracking-tighter font-bold">Getir'i indirin!</h3>
        <p className="font-semibold text-xs sm:text-base mt-3">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.
        </p>
        <div className="grid sm:flex grid-cols-2 gap-2 mt-4 sm:mt-8">
          <a href="https://itunes.apple.com/app/id995280265" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.getir" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
          </a>
          <a href="https://appgallery7.huawei.com/#/app/C100954039" className="transition-all transform hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
          </a>
        </div>
      </div>
      <div className="self-end mt-4">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"/>
      </div>
    </div>

 
  )
}

export default MobileApp
