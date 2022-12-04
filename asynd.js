async function harry(){
    let delhiWhether = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("28 deg")
        }, 3000);
    })
    let mumbaiWhether = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("29 deg")
        }, 8000);
    })

    // delhiWhether.then((value)=>{console.log(value)})
    // mumbaiWhether.then((value)=>{console.log(value)})
    console.log("waiting for delhi")
    let delhiW = await delhiWhether;
    console.log(delhiW)
    console.log("waiting for mumbai")
    let mumW = await mumbaiWhether;
    console.log(mumW)

    return delhiW;
    
}

// harry().then((value)=>{console.log(value)})
harry().then((value)=>{console.log(value)});