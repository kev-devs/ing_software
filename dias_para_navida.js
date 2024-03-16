function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.ceil((christmas - today) / oneDay);
}

console.log("Days until Christmas:", daysUntilChristmas());