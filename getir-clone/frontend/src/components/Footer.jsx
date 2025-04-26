import Menu from '../ui/Menu'
import { FaFacebook ,FaTwitter ,FaInstagram  } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";


const Footer = () => {

  const menus = [

    {
      title: 'Getir\'i keşfet',
      items: [
        {
          url: '',
          title: 'Hakkımızda'
        },
        {
          url: '',
          title: 'Kariyer'
        },
        {
          url: '',
          title: 'Teknoloji Kariyerleri'
        },
        {
          url: '',
          title: 'Sosyal Sorumluluk Projeleri'
        }
        ,
        {
          url: '',
          title: 'Basın Bültenleri'
        }
      ]
    },
    {
      title: 'Yardıma mı ihtiyacın var ?',
   
      items: [
        {
          url: '',
          title: 'Sıkça Sorulan Sorular'
        },
        {
          url: '',
          title: 'Kişisel Verilerin Korunması'
        },
        {
          url: '',
          title: 'Gizlilik Politikası'
        },
        {
          url: '',
          title: 'Kullanım Koşulları'
        }
        ,
        {
          url: '',
          title: 'Çerez Politikası'
        },
        {
          url: '',
          title: 'İşlem Rehberi'
        }
      ]
    },
    {
      title: 'İş Ortağımız Ol',
      items: [
        {
          url: '',
          title: 'Bayimiz Olun'
          
        },
        {
          url: '',
          title: 'Deponu Kirala'
        },
        {
          url: '',
          title: 'GetirYemek Restoranı Ol'
        },
        {
          url: '',
          title: 'GetirÇarşı İşletmesi Ol'
        }
        ,
        {
          url: '',
          title: 'Zincir Restoranlar'
        }
      ]
    }
  ]

  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto'>
        <div className='relative grid grid-cols-4 pt-10 items-start  '>
          <section>
            <nav className='grid gap-y-4'>
              <h6 className='text-lg text-primary '>Getir'i indir!</h6>
              <a href='https://itunes.apple.com/app/id995280265' className="transition-all transform hover:scale-105">
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
              </a>
              <a href='https://play.google.com/store/apps/details?id=com.getir' className="transition-all transform hover:scale-105">
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
              </a>
              <a href='https://appgallery7.huawei.com/#/app/C100954039' className="transition-all transform hover:scale-105">
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
              </a>
            </nav>
          </section>
           {menus.map((menu,index)=> <Menu key={index}{...menu}/>)}
           <div className="absolute transform top-10 right-[10px] box-border block w-[100px] h-full">
            <a href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1" className=" px-4 py-4 flex justify-end items-center rounded-lg shadow-[0px_1px_6px_rgba(105,116,136,0.15)] ">
            <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" className='w-[80px] h-[80px]'/>
            </a> 
           </div>
        </div>
        <div className='flex justify-between items-center border-t border-gray-100 py-6 mt-6 '>
        <div className='text-xs text-gray-700 flex gap-x-8 '>
          <p className='font-weight-semi-bold text-[13px] text-gray-storm'>&copy; 2025 Getir </p>
          <div>
          <a href='#' className='text-primary  hover:underline relative before:bg-secondary before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full'>Bilgi Toplumu Hizmetleri</a>
          </div>
          </div>
          <nav className='flex gap-x-3'>
            <a href='#' className='flex justify-center items-center  w-8 h-8 rounded-lg text-gray-storm transition-colors hover:text-primary  hover:bg-primary/10 '>
              <FaFacebook size={20}/>
              </a> 
              <a href='#' className='flex justify-center items-center  w-8 h-8 rounded-lg text-gray-storm transition-colors hover:text-primary hover:bg-primary/10 '>
              <FaTwitter size={20}/>
              </a> 
              <a href='#' className='flex justify-center items-center  w-8 h-8 rounded-lg text-gray-storm transition-colors hover:text-primary hover:bg-primary/10 '>
              <FaInstagram size={20}/>
              </a> 
              <a href='#' className='h-8 px-2 text-sm gap-x-2 border border-gray-200 flex items-center rounded-lg text-gray-storm transition-colors hover:border-transparent hover:text-primary hover:text-primary hover:bg-primary/10  '>
              <BiGlobe size={18}/>
              Türkçe(TR)
              </a> 
          </nav>
         
        </div>
      </div>
    </div>
  )
}

export default Footer