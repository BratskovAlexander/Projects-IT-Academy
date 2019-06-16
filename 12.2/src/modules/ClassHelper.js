function addClass(classList, elements) {
  elements.forEach(function(element) {
    element.classList.add(classList);
  });
}

function removeClass(classList, elements) {
  elements.forEach(function(element) {
    element.classList.remove(classList);
  });
}

function ClassHelper() {}
ClassHelper.removeClass = removeClass;
ClassHelper.addClass = addClass;

export { addClass, removeClass, ClassHelper };
