export const PREV = 'PREV';
export const NEXT = 'NEXT';
export const ZIP_CODE = 'ZIP_CODE';
export const FLOOR_AREA = 'FLOOR_AREA';
export const BUILDING_TYPE = 'BUILDING_TYPE';
export const ENERGY_COST = 'ENERGY_COST';
export const MAIL = 'MAIL';
export const TITLE = 'TITLE';
export const COMPANY = 'COMPANY';

export const goPrev = (step) => (dispatch) => {
  dispatch({
    type: PREV,
    payload: step
  });
};

export const goNext = (step) => (dispatch) => {
  dispatch({
    type: NEXT,
    payload: step
  });
};

export const setZipCode = (zipcode) => (dispatch) => {
  dispatch({
    type: ZIP_CODE,
    payload: zipcode
  });
};

export const setFloorArea = (floorArea) => (dispatch) => {
  dispatch({
    type: FLOOR_AREA,
    payload: floorArea
  });
};

export const setBuildingType = (buildingType) => (dispatch) => {
  dispatch({
    type: BUILDING_TYPE,
    payload: buildingType
  });
};

export const setEnergyCost = (energyCost) => (dispatch) => {
  dispatch({
    type: ENERGY_COST,
    payload: energyCost
  });
};
export const setMail = (userDetails) => (dispatch) => {
  dispatch({
    type: MAIL,
    payload: userDetails
  });
};
export const setTitle = (userDetails) => (dispatch) => {
  dispatch({
    type: TITLE,
    payload: userDetails
  });
};
export const setCompany = (userDetails) => (dispatch) => {
  dispatch({
    type: COMPANY,
    payload: userDetails
  });
};
