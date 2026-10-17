export default function classList(...classes: (string | unknown)[]) {
  return classes.filter(v => Boolean(v)).join(" ");
}