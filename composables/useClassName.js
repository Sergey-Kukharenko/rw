export function useClassName (obj, clsNm) {
  return Object.entries(obj).reduce(
    (prev, [key, value]) =>
      key[value] !== 'undefined' ? { ...prev, [`${clsNm}--${value}`]: value } : {},
    {}
  )
}
