const test = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 



function superbowlWin(record) {
    let win = record.find(({result}) => result === "W");
    if (win) {return win.year};
}

console.log(superbowlWin(test))