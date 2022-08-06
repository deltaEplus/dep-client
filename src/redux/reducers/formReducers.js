import {
  PREV, NEXT, FLOOR_AREA, BUILDING_TYPE, ZIP_CODE
} from '../actions/formActions';

const initialStep = 0;

const initialForm = {
  zipCode: '',
  floorArea: '',
  buildingType: ''
};

export function formReducer(form = initialForm, action) {
  switch (action.type) {
    case ZIP_CODE:
      return { ...form, zipCode: action.payload };
    case FLOOR_AREA:
      return { ...form, floorArea: action.payload };
    case BUILDING_TYPE:
      return { ...form, buildingType: action.payload };
    default:
      return form;
  }
}

function stepReducer(step = initialStep, action) {
  switch (action.type) {
    case PREV:
      return step - 1;
    case NEXT:
      return step + 1;
    default:
      return step;
  }
}

export default stepReducer;
