// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const hero = Asset.fromModule(require('./hero.png')).uri;

const ImageCollection = {
   hero,
}

export { ImageCollection };
