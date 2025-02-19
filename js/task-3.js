function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingValue = Number.parseFloat(padding);
    const borderValue = Number.parseFloat(border);
    return contentWidth + (paddingValue * 2) + (borderValue * 2);
}



