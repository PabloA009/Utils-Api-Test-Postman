const last = (tot, val) => {
  return val === tot;
};

const isDict = (val) => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

const isList = (val) => {
  return Array.isArray(val);
};

const requiredSimple = (key, cl) => {
  return cl ? `"${key}"` : `"${key}",`;
};

const propertiesSimple = (key, val, cl) => {
  return cl ? `"${key}":{"type":"${val}"}` : `"${key}":{"type":"${val}"},`;
};

const propertiesDict = (key, val, cl) => {
  let keys = Object.keys(val);
  let tm = keys.length;
  let aux = 1;
  let pro = `"${key}":{"properties":{`;
  let req = ',"required":[';

  for (let ky of keys) {
    let value = val[ky];
    if (isDict(value)) {
      pro += propertiesDict(ky, value, last(tm, aux));
      req += requiredSimple(ky, last(tm, aux));
    } else {
      pro += propertiesSimple(ky, value, last(tm, aux));
      req += requiredSimple(ky, last(tm, aux));
    }
    aux++;
  }

  pro += cl ? `}${req}],"type":"object"}` : `}${req}],"type":"object"},`;

  return pro;
};

const propertiesList = (key, val, cl) => {
  let tm = val.length;
  let aux = 1;
  let pro = `"${key}":{"items":{"properties":{`;
  //   let req = ',"required":[';

  for (let ind of val) {
    pro += propertiesDict(key, ind, last(tm, aux));
    // req += requiredSimple(key, last(tm, aux));
    aux++;
  }

  pro += cl
    ? `}},"minItems":1,"type":"array"}`
    : `}},"minItems":1,"type":"array"},`;

  return pro;
};

export const valSchema = (sqm) => {
  let head = 'pm.test("Response match schema", function () { var schema =\n';
  let headSchema = '{"$schema":"http://json-schema.org/draft-07/schema#",';
  let pro = '"properties":{';
  let req = ',"required":[';
  let nohead = ';pm.response.to.have.jsonSchema(schema);});';

  let prev = `pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response time is less than 5000ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(5000);
});

pm.test("Response is valid JSON", function () {
  pm.response.to.be.json;
});\n\n`;

  let sqmParsed = JSON.parse(sqm);
  let keys = Object.keys(sqmParsed);
  let tm = keys.length;
  let aux = 1;

  for (let key of keys) {
    let value = sqmParsed[key];
    if (isDict(value)) {
      pro += propertiesDict(key, value, last(tm, aux));
      req += requiredSimple(key, last(tm, aux));
    } else if (isList(value)) {
      pro += propertiesList(key, value, last(tm, aux));
      req += requiredSimple(key, last(tm, aux));
    } else {
      pro += propertiesSimple(key, value, last(tm, aux));
      req += requiredSimple(key, last(tm, aux));
    }
    aux++;
  }

  let schm = headSchema + pro + '}' + req + '],"type":"object"}';
  let schmF = JSON.stringify(JSON.parse(schm), null, 2);

  return prev + head + schmF + nohead;
};
