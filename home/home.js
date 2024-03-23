function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const eraName = {
        '令和': 2018,
        '平成': 1989,
        '昭和': 1926,
        '大正': 1912,
        '明治': 1868
    };

    let currentEra = '';
    for (const era in eraName) {
        if (year >= eraName[era]) {
            currentEra = era;
            break;
        }
    }

    const formattedDate = `${currentEra}${year - eraName[currentEra]}年(${year})${month}月${day}日`;
    document.getElementById('dateDisplay').textContent = formattedDate;
}

getCurrentDate();
