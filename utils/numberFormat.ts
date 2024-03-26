

export const toComma = (value: number | string): string => {
  if (!value) return '0'
  return `${value}`.replace(
    /^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
    (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&')
  )
}



/** 3/2 版本：輸入框金額以萬為單位，限制輸入到小數點後四位，且輸入時加上千分位  */
export const amountInputFormatter = (val: string | number) => {
  // 限制開頭不為零、純數字、小數點後四位
  const amountWithDecimal = `${val}`
    .replace(/^0{1,},/g, '')
    .replace(/[^\d.]/g, '')
    .replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
    .replace(/\.(\d{4})\d+/, '.$1')

  const digitParts = `${amountWithDecimal}`.split('.') // 1200.5678 => [1200, 5678]

  digitParts[0] = digitParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 1200 => 1,234

  return digitParts.join('.') // 1,200 + .5678 = 1,200.5678
}

/** 3/2 版本：限制開頭不為零、純數字  */
export const amountInputFormatterWithoutDecimal = (val: string | number) => {
  const amountWithDecimal = `${val}`.replace(/^0+/, '').replace(/[^\d]/g, '')

  return toComma(amountWithDecimal)
}


/** 無條件捨去到小數點後二位 */
export const roundToTwoDecimal = (num?: number): number => {
  if (!num) return 0
  const multiplier = Math.pow(10, 2)
  return Math.floor(num * multiplier) / multiplier
}

export const amountInputFormatterForPercent = (val: string | number) => {
  // 將輸入值轉為字符串，並處理以去除開頭的零並保留純數字和小數點
  let formattedValue = `${val}`
    .replace(/^0+/g, '')  // 移除開頭的零
    .replace(/[^\d.]/g, '')  // 只保留數字和小數點
    .replace(/\.(?=.*\.)/g, '')  // 移除除了第一個之外的所有小數點
    .replace(/^(\d*\.?)(\d{0,2}).*$/, '$1$2'); // 保留小數點後最多兩位數字

  // 如果經過處理後的數字為空或只有一個小數點，則轉為'0'。這一步驟保證輸出不會是空的或只有一個點
  // if (formattedValue === '' || formattedValue === '.') {
  //   formattedValue = '0';
  // } else if (formattedValue.startsWith('.')) {  // 如果字符串以小數點開頭，則在前面添加0
  //   formattedValue = '0' + formattedValue;
  // }\


  return isNaN(+formattedValue) ? 0 : +formattedValue
}


