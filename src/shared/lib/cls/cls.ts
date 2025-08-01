// Record is a regular object but with limited amount of values
export type Mods = Record<string, string | boolean>

// const a: Mods = {
//   '123': true
// }

export function cls(
  className: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  const modesClasses = Object.entries(mods)
    .filter((mode) => Boolean(mode[1]))
    .map(([className]: [string, string | boolean]) => className)
    .flat(1)

  return [className, ...modesClasses, ...additional.filter(Boolean)]
    .join(' ')
    .trim()
}
