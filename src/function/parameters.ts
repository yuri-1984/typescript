//オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample1: User is signed in username is ', username)
    return true
  } else {
    console.log('Function parameters sample2: User is not signed in.')
    return false
  }
}

//デフォルトパラメーターを持つ関数

export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample3: User is signed in username is ', username)
    return true
  } else {
    console.log('Function parameters sample4: User is not signed in.')
    return false
  }
}

//レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  //prevTotal前の値、productPrice現在の値
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}

//呼び出しシグネチャ(省略記法)
type LogMessage = (message: string) => void

export const LogMessage6: LogMessage = (message) => {
  console.log('Function parameters sample6: ', message)
}

//完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
  console.log('Function parameters sample7: ', message)
}
