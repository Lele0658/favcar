import Header from '../components/Header';
import GalleryLightbox from '../components/GalleryLightbox';

const imageFilenames = [
  'pexels-04iraq-1272398525-29593324.jpg',
  'pexels-jean-marc-bonnel-387362531-17898620.jpg',
  'pexels-karam-alani-1110081-29308526.jpg',
  'pexels-lynxexotics-3764984.jpg',
  'pexels-lynxexotics-3764986.jpg',
  'pexels-lynxexotics-3894048.jpg',
  'pexels-lynxexotics-3894049.jpg',
  'pexels-lynxexotics-3894057.jpg',
  'pexels-mikebirdy-191327.jpg',
  'Rolls-Royce Ghost Extended, 2024, 5K.jpg',
  'Rolls-Royce Ghost, 5K, 8K.jpg',
  'Rolls-Royce Ghost, Mansory.jpeg',
  'Rolls-Royce Phantom EWB Cherry Blossom.jpg',
  '105687-rolls-royce-phantom-ewb-orange-uhd-4k-wallpaper.jpg',
  '118681-purple-rolls-royce-phantom-hd-wallpaper.jpg',
  '152741-4k-wallpaper-of-2019-wald-rolls-royce-phantom-sports-line-black.jpg',
  '179553-rolls-royce-raith-luminary-collection-4k-wallpaper-hd-car.jpg',
  '180688-wallpaper-4k-rolls-royce-sweptail-car-2017-cars-wallpaper-4k.jpg',
  '22707-rolls-royce-sweptail-4k-hd-cars-4k-wallpaper-image.jpg',
  '239738-rolls-royce-4k-wallpaper-top-free-rolls-royce-4k-background.jpg',
  '272060-cars-rolls-royce-wraith-black-badge-4k-wallpaper-luxury-cars.jpg',
  '292473-rolls-royce-phantom-ewb-chengdu-2018-4k-ultra-hd-wallpaper.jpg',
  '299133-4k-photo-of-2019-rolls-royce-phantom-tranquillity-rolls-royce.jpg',
  '305330-rolls-royce-4k-wallpaper-top-free-rolls-royce-4k-background.jpg',
  '336540-rolls-royce-phantom-2017-4k-wallpaper-hd-car-wallpaper.jpg',
  '402172-rolls-royce-phantom-4k-ultra-hd-wallpaper-background-image.jpg',
  '431356-rolls-royce-phantom-uhd-4k-wallpaper.jpg',
  '67162-rolls-royce-wraith-4k-hd-cars-4k-wallpaper-image-background.jpg'
];

const imageUrls = imageFilenames.map(name => `/images/${encodeURIComponent(name)}`);

export default function Gallery() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="page-title">Gallery</h1>
        <GalleryLightbox images={imageUrls} />
      </main>
    </>
  );
}