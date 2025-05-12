🛒 Getir Clone
Bu proje, Getir uygulamasının temel işlevlerini taklit eden bir SPA (Single Page Application) örneğidir. React, Tailwind CSS ve çeşitli açık kaynak kütüphaneler kullanılarak geliştirilmiştir. Proje, Prototürk YouTube kanalındaki Getir Clone videosu referans alınarak oluşturulmuştur.


🧰 Kullanılan Teknolojiler ve Kütüphaneler
| Teknoloji / Kütüphane         | Açıklama                                                     |
| ----------------------------- | ------------------------------------------------------------ |
| **React**                     | Ana JavaScript UI kütüphanesi                                |
| **Vite**                      | Geliştirme sunucusu ve build aracı                           |
| **Tailwind CSS**              | Yardımcı sınıflara dayalı CSS framework’ü                    |
| **style.css**                 | Tailwind üzerinden yapılan özelleştirmeler burada tanımlandı |
| **react-helmet**              | Sayfa sekmesi başlıklarını dinamik değiştirmek için          |
| **react-modal**               | Erişilebilir modal pencereler için
| **react-flags-select**        | ülke bayraklarını içeren bir ülke seçici (country selector) React bileşenidir.                            |
| **@headlessui/react**         | Ulaşılabilirlik dostu UI bileşenleri                         |
| **@react-google-maps/api**    | Google Maps API entegrasyonu                                 |
| **react-slick**               | Slider/Carousel bileşeni                                     |
| **react-player**              | Video oynatıcı bileşeni                                      |
| **navigator.permissions API** | Tarayıcıdan konum izni durumunu kontrol etmek için           |

📁 Alias (Yol Takma Adı)
Import işlemlerini sadeleştirmek için vite.config.js içinde alias tanımlandı:


## Kullanım/Örnekler

```javascript
alias: {
  '@': path.resolve(__dirname, './src')
}

```

  🛠️ Özellikler

SPA yapısı

Modal aç/kapat yönetimi

Sekme başlığı dinamik olarak değişir (react-helmet)

Tailwind ile responsive arayüz

Google Maps entegrasyonu (hazırlanıyor)

Video ve slider bileşenleri

Konum izni kontrolü (navigator.permissions)

style.css üzerinden özel stiller

React Snippets eklentisi kullanılarak kod yazım hızı artırıldı

  
## Bilgisayarınızda Çalıştırın
🚀 Başlangıç
Projeyi klonlayın

```bash
  git clone https://link-to-project
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run start
```

  
📝 Yapılacaklar

 📍 Konum özelliği için Google Maps API tam entegrasyonu

 ⏳ Loading animasyonu eklenecek

 📱 Mobil ve tüm ekranlara uygun responsive yapı tamamlanacak

 🌐 Çoklu dil desteği için Redux entegrasyonu yapılacak

 🧩 Backend (Java Spring Boot veya Node.js) ile bağlanacak
  
## Katkı

Katkılara her zaman açığız!

Başlamak `Contributor.md'ye bakın.

Lütfen bu projenin `davranış kurallarına` uyun.

  
## Yazarlar ve Teşekkür

- [@tayfunerbilen](https://github.com/tayfunerbilen) tasarım ve geliştirme için.

  📹 Referans
🎥 Prototürk - Getir Clone YouTube Videosu (https://www.youtube.com/watch?v=E7RMBak8CAk&t=1966s&ab_channel=PROTOTURK)
## Kullanılan Teknolojiler

![MIT License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-19.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-frontend-blueviolet)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)
  
## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](./assets/demo.gif)

  
## Geri Bildirim

Herhangi bir geri bildiriminiz varsa, lütfen gurlukgoksel@gmail.com adresinden bana ulaşın.

  
