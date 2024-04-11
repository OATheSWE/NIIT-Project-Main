// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const banner = Asset.fromModule(require('./Banner.jpg')).uri;
const banner2 = Asset.fromModule(require('./Banner 2.jpg')).uri;
const banner3 = Asset.fromModule(require('./Banner 3.jpg')).uri;
const banner4 = Asset.fromModule(require('./Banner 4.jpg')).uri;
const banner5 = Asset.fromModule(require('./Banner 5.jpg')).uri;
const AnthemBanner = Asset.fromModule(require('./Anthem Banner.jpg')).uri;
const home = Asset.fromModule(require('./home.jpg')).uri;
const disburyLogo = Asset.fromModule(require('./disbury-logo.png')).uri;
const topAngelLogo = Asset.fromModule(require('./topangel-logo.png')).uri;
const schoolVideo = Asset.fromModule(require('./school-video.mp4')).uri;
const studentTestify = Asset.fromModule(require('./student-testify.jpeg')).uri;
const studentTestify2 = Asset.fromModule(require('./student-testify-2.jpeg')).uri;
const studentTestify3 = Asset.fromModule(require('./student-testify-3.jpeg')).uri;
const studentTestify4 = Asset.fromModule(require('./student-testify-4.jpeg')).uri;
const studentTestify5 = Asset.fromModule(require('./student-testify-5.jpeg')).uri;
const studentTestify6 = Asset.fromModule(require('./student-testify-6.jpeg')).uri;
const aboutImage = Asset.fromModule(require('./aboutImage.jpg')).uri;






const ImageCollection = {
   banner,
   banner2,
   banner3,
   banner4,
   banner5,
   home,
   disburyLogo,
   topAngelLogo,
   schoolVideo,
   AnthemBanner,
   studentTestify,
   studentTestify2,
   studentTestify3,
   studentTestify4,
   studentTestify5,
   studentTestify6,
   aboutImage,
}

export { ImageCollection };
