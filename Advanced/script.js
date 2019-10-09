var json_string = `[
    {
        "title": "Parry Hotter",
        "author": "K.J. Bowling",
        "read": false,
        "img": "img/photter.jpg"
    },
    {
        "title": "Das Kapital",
        "author": "Marl Karx",
        "read": false,
        "img": "img/kapital.jpg"
    },
    {
        "title": "Javascript for Idiots",
        "author": "Some Guy",
        "read": true,
        "img": "img/js.jpg"
    },
    {
        "title": "Funny and Original Cat Comics",
        "author": "Your Mom",
        "read": true,
        "img": "img/cats.jpg"
    },
    {
        "title": "Das Alphabet von A bis Z",
        "author": "Alpha Beta",
        "read": false,
        "img": "img/alphabet.jpg"
    }
]`

print_booklist()

function print_booklist() {
    let data = JSON.parse(json_string)
    let ul_elmt = make_list(data)
    document.body.appendChild(ul_elmt)
}

function make_list(data) {
    let ul_elmt = document.createElement('ul')
    for(let book of data) {
        let li_elmt = document.createElement('li')
        let p_elmt = document.createElement('p')
        let img_elmt = document.createElement('img')
        img_elmt.src = book.img
        if(book.read) {
            li_elmt.className = "read"
        } else {
            li_elmt.className = "unread"
        }
        p_elmt.innerHTML = `"${book.title}" by ${book.author}`
        li_elmt.appendChild(img_elmt)
        li_elmt.appendChild(p_elmt)
        ul_elmt.appendChild(li_elmt)
    }
    return ul_elmt
}