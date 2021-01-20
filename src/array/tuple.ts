export default function tupleSample(): void {
  //一般的なタプルの型定義
  const response: [number, string] = [200, 'ok']
  // response =[400,"Bad Request","Email parameter is missing"]
  // response =["400","Bad Request"]
  console.log('Array tuple sample1:', response)

  //可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['kana', 'Miku', 'keiko']
  girlfriends.push('Misa')
  console.log('Array tuple sample2:', girlfriends)
}
