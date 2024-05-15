import { ICreateUsers, IGetUsers, IUpdateUsers } from "./user.types"

export interface IUsersStore{
    user: IGetUsers[]
    OnGetUsers: ()=> void 
    OnDelete: (id: number) => void
    OnCreate:(payload: ICreateUsers)=> void
    OnUpdate:(id : number, payload: IUpdateUsers)=> void
}
