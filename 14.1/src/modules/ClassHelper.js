class ClassHelper {
  constructor() {
    ClassHelper.removeClass = removeClass;
    ClassHelper.addClass = addClass;
  }
}

ClassHelper.addClass = function (classList, elements) {
  elements.forEach(function (element) {
    element.classList.add(classList);
  });
}

ClassHelper.removeClass = function (classList, elements) {
  elements.forEach(function (element) {
    element.classList.remove(classList);
  });
}


export { ClassHelper };