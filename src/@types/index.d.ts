
declare module 'ogolfim' {

  export type Districts = {
    id: number
    name: string
  }[]

  export interface Province {
    id: number
    name: string
    districts: Districts
  }

  export interface User {
    name: string
  }

  export type Role = {
    role: string
  }
}