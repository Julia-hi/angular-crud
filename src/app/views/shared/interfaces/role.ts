import { Roles } from "./roles";
import { User } from "./user";

export interface Role {
    id: number;
    name: Roles;
    users?: User[];
}
