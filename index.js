function timeMain(start,end){
    let arr = [];
    let monthObj = getMonth();
    while(start <= end){
        let isLeapYear = start % 400 === 0 || (start % 4 === 0 && start % 100 !== 0) ? 'leap' : 'nonleap';
        arr.push({
            value: start,
            label: start + '年',
            children: monthObj[isLeapYear]
        });
        start++;
    }
    return arr
}
// 遍历出月份，分为2月有28天，2月有29天
function getMonth(){
    let day = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };
    let dayObj = getDay();
    // 2月28天
    let arrNonleap = [];
    // 2月29天
    let arrLeap = [];
    for(let i = 1;i<= 12;i++){
        arrNonleap.push({
            value: i,
            label: i + '月',
            children: dayObj[day[i]]
        })
    }
    arrLeap = JSON.parse(JSON.stringify(arrNonleap));
    arrLeap[1].children = dayObj[29];
    return {
        leap: arrLeap,
        nonleap: arrNonleap
    }
}
// 遍历出天数，分为28天，29天，30天，31天
function getDay(){
    let part28 = [];
    let part29 = [];
    let part30 = [];
    let part31 = [];

    for(let i = 1; i <= 28; i++){
        part28.push({
            value: i,
            label: i + '号'
        })
    }
    part29 = part29.concat(part28,[{
        value: 29,
        label: 29 + '号'
    }]);
    part30 = part30.concat(part29,[{
        value: 30,
        label: 30 + '号'
    }]);
    part31 = part31.concat(part30,[{
        value: 31,
        label: 31 + '号'
    }]);
    return {
        28: part28,
        29: part29,
        30: part30,
        31: part31
    }
}

























