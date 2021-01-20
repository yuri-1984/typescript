export default function typeAliasSample(): void {
  //型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample1:', japan)

  const america: Country = {
    capital: 'Washington,D.C.',
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object alias sample2:', america)

  //合併型(union)と交差型(intersection)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  //合併型....上記どちらかの型をもつ
  type Advrnturer = Knight | Wizard

  //交差型..上記どちらの型を持つ
  type Paladin = Knight & Wizard

  //Knightよりの冒険者
  const adventure1: Advrnturer = {
    hp: 100,
    sp: 30,
    weapon: '木の棒',
    swordSkill: '三連斬り',
  }
  //Wizardよりの冒険者
  const adventure2: Advrnturer = {
    hp: 100,
    mp: 30,
    weapon: '木の棒',
    magicSkill: 'ファイアボール',
  }
  console.log('Object alias sample３:', adventure1)
  console.log('Object alias sample4:', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀のつえ',
    swordSkill: '三連斬り',
    magicSkill: 'ファイアボール',
  }
  console.log('Object alias sample5:', paladin)
}
