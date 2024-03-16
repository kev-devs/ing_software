function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // Month is 0-indexed (11 represents December)
    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    return Math.ceil((christmas - today) / oneDay);
}

console.log("Days until Christmas:", daysUntilChristmas());