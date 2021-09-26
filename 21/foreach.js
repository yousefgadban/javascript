const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
];


const orderedList = document.createElement('ol')
orderedList.style.listStyleType = 'none'
document.body.append(orderedList)


users.forEach(element => {
    const listItem = document.createElement('li')
    listItem.innerHTML = element.firstName + ' ' + element.lastName
    listItem.setAttribute('data-id', ''+element.id);
    orderedList.append(listItem)
});