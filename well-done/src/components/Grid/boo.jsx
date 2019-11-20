function getBooleanValue(cssSelector) {
    return document.querySelector(cssSelector).checked === true;
  }

  export default getBooleanValue;