const ll = `ddd`
type aa = string | number
type bb = string & number
// import $ from 'jquery'

// import m from 'moment'
// declare module 'moment' {
//   export function myFunction():void
// }

export type keys = {
  name: string;
  appId: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  config: object;
}
const Obj = {
  name: '123',
  age: 33,
  id: 'dsdsd'
}

type key = keyof keys

function getValue<T, U extends keyof T>(value: U, obj: T): T[U] {
  return obj[value]
}

getValue('bug', {age: 3, bug: 3})
// m.myFunction = () => console.log(111)
