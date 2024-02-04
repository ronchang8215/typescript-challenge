/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */
export function classifyAge(age: number): string {
  // 請在此處寫下你的程式碼
  switch (true) {
    case age >= 0 && age <= 12:
      return "Child";
    case age >= 13 && age <= 17:
      return "Teenager";
    case age >= 18 && age <= 64:
      return "Adult";
    case age >= 65:
      return "Senior";
    default:
      return "";
  }
}
