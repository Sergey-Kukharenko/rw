export function useSwap (value, array, index1, index2) {
  if(value) {
    return array.map((val, idx) => {
      if (idx === index1) return array[index2];
      if (idx === index2) return array[index1];
      return val;
    })
  } else {
    return array
  }
}
