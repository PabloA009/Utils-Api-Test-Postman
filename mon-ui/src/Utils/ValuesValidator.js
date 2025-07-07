const isDict = (val) => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

const isList = (val) => {
  return Array.isArray(val);
};

const lType = (val) => {
  return typeof val === 'string';
};

const simple = (key, val) => {
  let tst;

  if (lType(val)) {
    tst = `\n\npm.test("${key} field must be: '${val}'", function () {\n`;
    tst += `\tpm.expect(responseV.${key}).to.eql('${val}');\n});`;
  } else {
    tst = `\n\npm.test("${key} field must be: ${val}", function () {\n`;
    tst += `\tpm.expect(responseV.${key}).to.eql(${val});\n});`;
  }

  return tst;
};

const noSimple = (key, val) => {
  let tst = '';

  for (let ky in val) {
    if (lType(val[ky])) {
      tst += `\n\npm.test("${key}.${ky} field must be: '${val[ky]}'", function () {\n`;
      tst += `\tpm.expect(responseV.${key}.${ky}).to.eql('${val[ky]}');\n});`;
    } else {
      tst += `\n\npm.test("${key}.${ky} field must be: ${val[ky]}", function () {\n`;
      tst += `\tpm.expect(responseV.${key}.${ky}).to.eql(${val[ky]});\n});`;
    }
  }

  return tst;
};

const noSimpleList = (key, val, idx) => {
  let tst = '';

  for (let ky in val) {
    if (lType(val[ky])) {
      tst += `\n\npm.test("${key}[${idx}].${ky} field must be: '${val[ky]}'", function () {\n`;
      tst += `\tpm.expect(responseV.${key}[${idx}].${ky}).to.eql('${val[ky]}');\n});`;
    } else {
      tst += `\n\npm.test("${key}[${idx}].${ky} field must be: ${val[ky]}", function () {\n`;
      tst += `\tpm.expect(responseV.${key}[${idx}].${ky}).to.eql(${val[ky]});\n});`;
    }
  }

  return tst;
};

const lList = (key, val) => {
  let aux = 0;
  let tst = '';

  for (let ind of val) {
    tst += noSimpleList(key, ind, aux);
    aux++;
  }

  return tst;
};

export const valueTests = (sqm) => {
  const prev = 'const responseV = pm.response.json();';
  const sqmParsed = JSON.parse(sqm);

  let tsts = '';
  for (let key in sqmParsed) {
    if (isDict(sqmParsed[key])) {
      tsts += noSimple(key, sqmParsed[key]);
    } else if (isList(sqmParsed[key])) {
      tsts += lList(key, sqmParsed[key]);
    } else {
      tsts += simple(key, sqmParsed[key]);
    }
  }

  return prev + tsts;
};
