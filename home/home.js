function getCurrentDate() {
    const now = new Date(); // 現在の日付と時刻を取得
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月は0から始まるため+1
    const day = now.getDate();

    // 元号の定義
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
            currentEra = era; // 現在の元号を取得
            break;
        }
    }

    // 日付のフォーマット
    const formattedDate = `${currentEra}${year - eraName[currentEra]}年(${year})${month}月${day}日`;

    // 日付を表示する<p>要素に反映
    document.getElementById('dateDisplay').textContent = formattedDate;
}

// 実行して日付を設定
getCurrentDate();
