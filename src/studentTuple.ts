/**
 * 這個函式的目的是將學生的姓名和分數正確地打印出來。
 * 你需要使用 JavaScript 的字串來將學生的姓名和分數組合成一個字串。
 *  並嘗試在參數用元組來定義
 * 範例:
 * 輸入: ['Alice', 85]
 * 輸出: 'Alice: 85%'
 */

type student = string | number;

export function printStudentInfo(student: student[]) {
  // 在此實現函式
  return student
    .map((item) => {
      if (typeof item === "number") {
        return item + "%";
      } else {
        return item + ":";
      }
    })
    .join(" ");
}
