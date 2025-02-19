function getElementWidth(content, padding, border) {
    let contentWidth = Number.parseFloat(content);
    let paddingWidth = Number.parseFloat(padding);
    let borderWidth = Number.parseFloat(border);
    const borderBox = contentWidth + (paddingWidth *= 2) + (borderWidth *= 2);
    return borderBox;
}

console.log(getElementWidth("50px", "8px", "4px"));
getElementWidth("50px", "8px", "4px");


