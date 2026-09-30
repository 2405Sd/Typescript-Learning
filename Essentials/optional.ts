function generateError(message?: string){
    throw new Error(message);
}

generateError('An error occurred!');

type user = {
    name: string,
    age: number,
    role?: 'admin' | 'editor' | 'guest' | 'reader'
};