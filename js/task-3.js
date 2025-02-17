function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = Number.parseFloat(padding) * 2;
    const borderWidth = Number.parseFloat(border) * 2;
    return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "8px"));