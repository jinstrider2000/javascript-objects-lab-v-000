var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var tempObj = Object.assign({}, object);
  delete tempObj[key];
  return Object.assign({}, tempObj);
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
