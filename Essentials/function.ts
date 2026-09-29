export {};

function add(a:number, b:number): number
{
    return a+ b;
}


function log(messsage: string){
    console.log(messsage);
    
}


function LogAndThrow(errorMessage: string): never{
    console.log(errorMessage);
    throw new Error(errorMessage);
}
const logMsg = (msg: string) =>{
    console.log(msg);
}


function performJob(cb:(msg: string) => void) {
    /// ....
    cb('Job Done!');



}

performJob(logMsg);

type User = {
    name: string,
    age: number,
    greet:() => string;
}

let user: User ={
    name: 'Akash',
    age: 26,
    greet(){
        console.log('Hello');
        return this.name;
    }
}

user.greet();


