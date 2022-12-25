let is_ok = true;

export const Promesa = (time, task) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if(is_ok){
                resolve(task)
            }else{
                reject(Error)
            }
        }, time);
    })
}