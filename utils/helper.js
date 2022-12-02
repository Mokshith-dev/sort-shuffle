export function selectClassName(value) {
  switch (value) {
    case 1:
    case 8:
      return "hippie-blue";
    case 2:
    case 4:
      return "glacial-blue-ice";
    case 3:
    case 5:
    case 9:
      return "pickled-bluewood";
    default:
      return "pale-slate";
  }
}
