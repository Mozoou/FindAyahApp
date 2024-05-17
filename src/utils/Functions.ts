import { PixelRatio } from 'react-native';

export const getFontSize = (size: number) => {
  const fontScale = PixelRatio.getFontScale();
  return size / fontScale;
}

export const shuffle = (array: Array<any>) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}