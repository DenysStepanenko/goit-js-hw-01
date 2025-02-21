function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content.replace('px', ''));
    const paddingWidth = Number.parseFloat(padding.replace('px', ''));
    const borderWidth = Number.parseFloat(border.replace('px', ''));

    return contentWidth + paddingWidth + paddingWidth + borderWidth + borderWidth + "px";
}
getElementWidth("50px", "8px", "4px"); // 74px
getElementWidth("60px", "12px", "8.5px"); // 101px

