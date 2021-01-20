export default function arraySample(): void {
  //シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log('Array array sample1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("10")
  console.log('Array array sample2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  //   ids.push(true)
  console.log('Array array sample3:', ids)

  //配列の型推論
  //   const generateSomeArray = ():(string|number)[] => {
  const generateSomeArray = () => {
    const _someArray = [] //any[]
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456)
  //   someArray.push(true)
  console.log('Array array sample4:', someArray)

  //イミュータブルな配列を作る
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  console.log('Array array sample5:', commands)
}
