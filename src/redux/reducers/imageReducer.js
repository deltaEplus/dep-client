import {
  IMG
} from '../actions/imageActions';

const initialImg = { img: '' };
export function imageReducer(img = initialImg, action) {
  switch (action.type) {
    case IMG:
      return { ...img, img: action.payload };

    default:
      return img;
  }
}
