const last = (tot, val) => {
  return val === tot;
};

const isDict = (val) => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

const isList = (val) => {
  return Array.isArray(val);
};

const isNumber = (val) => {
  return typeof val === 'number' && val !== null;
};

const integerFloat = (val) => {
  if (Number.isInteger(val)) {
    return 'integer';
  } else {
    return 'float';
  }
};

const isBool = (val) => {
  return typeof val === 'boolean' && val !== null;
};

const lType = (val) => {
  if (isNumber(val)) {
    return integerFloat(val);
  } else if (isBool(val)) {
    return 'boolean';
  } else {
    return 'string';
  }
};

const propertiesDict = (key, val, cl) => {
  let keys = Object.keys(val);
  let tm = keys.length;
  let aux = 1;
  let pro = `"${key}":{`;

  for (let ky of keys) {
    let value = val[ky];
    if (isDict(value)) {
      pro += propertiesDict(ky, value, last(tm, aux));
    } else {
      pro += propertiesSimple(ky, lType(value), last(tm, aux));
    }
    aux++;
  }

  return cl ? pro + '}' : pro + '},';
};

const propertiesDict2 = (val, cl) => {
  let keys = Object.keys(val);
  let tm = keys.length;
  let aux = 1;
  let pro = '{';

  for (let ky of keys) {
    let value = val[ky];
    if (isDict(value)) {
      pro += propertiesDict(ky, value, last(tm, aux));
    } else {
      pro += propertiesSimple(ky, lType(value), last(tm, aux));
    }
    aux++;
  }

  return cl ? pro + '}' : pro + '},';
};

const propertiesList = (key, val, cl) => {
  let tm = val.length;
  let aux = 1;
  let pro = `"${key}":[`;

  for (let ind of val) {
    pro += propertiesDict2(ind, last(tm, aux));
    aux++;
  }

  pro += cl ? `]` : `],`;

  return pro;
};

const propertiesSimple = (key, val, cl) => {
  return cl ? `"${key}":"${val}"` : `"${key}":"${val}",`;
};

export const DataType = (sqm) => {
  let bd = '';
  let sqmParsed = JSON.parse(sqm);
  let keys = Object.keys(sqmParsed);
  let tm = keys.length;
  let aux = 1;

  for (let key of keys) {
    let value = sqmParsed[key];

    if (isDict(value)) {
      bd += propertiesDict(key, value, last(tm, aux));
    } else if (isList(value)) {
      bd += propertiesList(key, value, last(tm, aux));
    } else {
      bd += propertiesSimple(key, lType(value), last(tm, aux));
    }
    aux++;
  }

  let res = JSON.stringify(JSON.parse('{' + bd + '}'), null, 2);
  return res;
};
