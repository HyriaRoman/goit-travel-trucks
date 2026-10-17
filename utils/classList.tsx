export default function classList(...classes: (string | undefined)[]) {
  return classes.filter(v => Boolean(v)).join(" ");
}