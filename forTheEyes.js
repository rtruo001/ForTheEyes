// Iterate through every element and read in the background-color and color
// Maps out the colors starting at #fff and #000 with iterations of black for backgrounds and shades of white for text
(function(){
  function changeToDarkMode() {
    // Delta color change.
    const dC = 2;
    // Mapping of every color to the corresponding shade of black (background) or white (text)
    let colorsBackgroundMapping = {}
    let colorsTextMapping = {}
    let currentBackgroundColorHex = 0
    let currentTextColorHex = 255

    console.log("Updating to Dark Mode: forTheEyes.js");

    document.querySelectorAll('*').forEach(function(node) {
      const elementStyle = getComputedStyle(node);
      let rgbaStrBackgroundColor = elementStyle['background-color'];
      let rgbaStrTextColor = elementStyle['color'];
      // let strBackgroundColor = rgbaStrBackgroundColor.substring(5, rgbaStrBackgroundColor.lastIndexOf(')'))
      // let rgbaArray = strBackgroundColor.split(/[ ,]+/)

      // Background
      if (!colorsBackgroundMapping.hasOwnProperty(rgbaStrBackgroundColor)) {
        colorsBackgroundMapping[rgbaStrBackgroundColor] = currentBackgroundColorHex;
        currentBackgroundColorHex += dC;
      }

      // Text
      if (!colorsTextMapping.hasOwnProperty(rgbaStrTextColor)) {
        colorsTextMapping[rgbaStrTextColor] = currentTextColorHex;
        currentTextColorHex -= dC;
      }

      // Sets the colors of the current element.
      let color = colorsBackgroundMapping[rgbaStrBackgroundColor]
      node.style.backgroundColor = 'rgb(' + color + ',' + color + ',' + color + ',1'+ ')';
      color = colorsTextMapping[rgbaStrTextColor]
      node.style.color = 'rgb(' + color + ',' + color + ',' + color + ',1' + ')';
    });
  }

  changeToDarkMode()

  // TODO: Update on web changes

  // COOL, but crashes everything because it's constantly checking the body, maybe it might be better to 
  // var observer = new MutationObserver(changeToDarkMode);
  // observer.observe(document.body, {attributes: true, childList: true, subtree: true})
})()
