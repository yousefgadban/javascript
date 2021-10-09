const getIDs = () =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve([532, 543, 753, 1, 5]);
    }, 500);
});


const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            500,
            recipeID
        );
    });
};


// getIDs()
//  .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//  })
//  .then((recipe) => {
//     console.log(recipe);
//  })
//  .catch((error) => {
//     console.log("It is an error!");
// });

async function startGetIDs() {
    let ids = await getIDs();
    let r = await getRecipe(ids[2]);
    console.log(r);
    return r
}

startGetIDs()


