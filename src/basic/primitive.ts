export default function primitiveSample(): void {
  const name = 'username'
  //   name = 123
  console.log('primitive sample1:', typeof name, name)

  const age = 11
  console.log(age)

  const inSingle = true
  console.log(inSingle)

  const isOver20: boolean = age >= 20
  console.log(isOver20)
}
