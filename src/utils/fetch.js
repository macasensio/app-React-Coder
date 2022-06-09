const customFetch = (time, task) => {
    //promesa
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task)
        }, time)
    })
}

export default customFetch;