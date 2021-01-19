export default function NotExistSample(): void {
  let name = null
  console.log(typeof name, name)
  name = 'username'

  if (name) {
    console.log('吾輩は猫である名前は' + name)
  } else {
    console.log('吾輩は猫である名前はまだ' + name)
  }

  let age = undefined
  console.log(typeof age, age)

  age = 28

  if (!age) {
    console.log('年齢は秘密です')
  } else {
    console.log('年齢は' + age + 'です')
  }
}
