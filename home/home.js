function getCurrentDate() {
    const now = new Date(); // 現在の日付と時刻を取得
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月は0から始まるため+1
    const day = now.getDate();
    const dayOfWeek = now.getDay(); // 曜日を取得（0:日曜日 ～ 6:土曜日）

    // 元号の定義
    const eraName = {
        '令和': 2018,
        '平成': 1989,
        '昭和': 1926,
        '大正': 1912,
        '明治': 1868
    };

// 日本語の曜日名の配列
const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

    let currentEra = '';
    for (const era in eraName) {
        if (year >= eraName[era]) {
            currentEra = era; // 現在の元号を取得
            break;
        }
    }

    // 日付のフォーマット
    const formattedDate = `${currentEra}${year - eraName[currentEra]}年(${year})${month}月${day}日(${weekDays[dayOfWeek]})`;

    // 日付を表示する<p>要素に反映
    document.getElementById('dateDisplay').textContent = formattedDate;
}

// 実行して日付を設定
getCurrentDate();
