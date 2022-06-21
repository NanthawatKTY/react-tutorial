function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 0;
    }
    return width * height;
}

test('Normal rectangle area, width > 0 and height > 0', () => {
    const rec1 = rectangleArea(2, 3);
    expect(rec1).toBe(6);
})

test('0 rectangle area, <= 0 or height <= 0', () => {
    const rec1 = rectangleArea(0, 3);
    expect(rec1).toBe(0);

    const rec2 = rectangleArea(2, 0);
    expect(rec2).toBe(0);

    const rec3 = rectangleArea(0, 0);
    expect(rec3).toBe(0);

    const rec4 = rectangleArea(-2, 3);
    expect(rec4).toBe(0);

    const rec5 = rectangleArea(2, -3);
    expect(rec5).toBe(0);

    const rec6 = rectangleArea(-2, -3);
    expect(rec6).toBe(0);

})