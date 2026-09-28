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



