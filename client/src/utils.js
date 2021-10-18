//Higher-order function for async/await error handling

export const catErrors = fn =>{
    return function (...args){
        return fn( ...args).catch((err)=>{
            console.error(err)
        })
    }
}