class ClassHelper {
  constructor() {
    ClassHelper.removeClass = removeClass;
    ClassHelper.addClass = addClass;
  }
  addClass(classList, elements) {
    elements.forEach(function(element) {
      element.classList.add(classList);
    });
  }
  removeClass(classList, elements) {
    elements.forEach(function(element) {
      element.classList.remove(classList);
    });
  }
}

export { ClassHelper };
