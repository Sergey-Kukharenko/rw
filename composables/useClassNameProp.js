export function useClassNameProp (value, clsNm) {
  return value
    ? [`${clsNm} ${clsNm}--${value}`]
    : clsNm
}
