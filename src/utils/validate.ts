import { User } from "../types/User";


export type Error = {
    [key: string]: string
}

export const validate = (data: User) => {
   const error: Error = {}

   if (!data.name) {
    error['name'] = "O campo de nome é obrigatório"
   }

   if (!data.email) {
    error['email'] = "O campo de email é obrigatório"
   }

   if (!data.agree) {
    error['agree'] = "Você precisa concordar com os termos"
   }

   return error
}