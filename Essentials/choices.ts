//enum Role {
//    ADMIN, 
//    EDITOR, 
//    GUEST, 
//}

type Role = 'admin' | 'editor' | 'guest' | 'reader';
type User={
    name: string,
    age: number,
    role: Role
    permissions: string[]
}

let userRole: Role = 'admin';



userRole = 'guest';


let possibleResults: [number, number,];

possibleResults = [1, -1];

function acess(role: Role) {

}


