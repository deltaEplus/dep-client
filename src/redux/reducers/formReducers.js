import {
  PREV, NEXT, FLOOR_AREA, BUILDING_TYPE, ZIP_CODE, ENERGY_COST, MAIL, COMPANY, TITLE
} from '../actions/formActions';

const initialStep = 0;

const initialForm = {
  zipCode: '',
  floorArea: '',
  buildingType: '',
  energyCost: ''
};

const intialUser = {
  mail: '',
  company: '',
  title: ''
};

export function formReducer(form = initialForm, action) {
  switch (action.type) {
    case ZIP_CODE:
      return { ...form, zipCode: action.payload };
    case FLOOR_AREA:
      return { ...form, floorArea: action.payload };
    case BUILDING_TYPE:
      return { ...form, buildingType: action.payload };
    case ENERGY_COST:
      return { ...form, energyCost: action.payload };
    default:
      return form;
  }
}
export function userReducer(user = intialUser, action) {
  switch (action.type) {
    case MAIL:
      return { ...user, mail: action.payload };
    case TITLE:
      return { ...user, title: action.payload };
    case COMPANY:
      return { ...user, company: action.payload };
    default:
      return user;
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
