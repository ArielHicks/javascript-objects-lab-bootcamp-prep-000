var recipes = {
  prop: 1,
  prop2: 2
}

function updateObjectWithKeyAndValue(object, key, value){
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.prop = [1, 3]
  return recipes
}
