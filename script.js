let titles = [];
let notes = [];
load();


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const note = notes[i];

        content.innerHTML += `
            <div class="card">
                <b>${title}</b> <br>
                ${note} <br>
                <button class="btn m-8px m-bottom-0px" onclick="deleteNote()">Löschen</button>
            </div>
        `;
    }
}

function addNote() {
    let title = document.getElementById('title');
    let note = document.getElementById('note');
    if (title.value.length < 1) {
        alert('Bitte Titel eingeben!')
    } else {
        if (note.value.length < 1) {
            alert('Bitte Text eingeben!')
        } else {
            titles.push(title.value);
            notes.push(note.value);

            title.value = '';
            note.value = '';

            render();
            save();
        }
    }
}

function deleteNote(i) {
    titles.splice(i, 1);
    notes.splice(i, 1);

    render();
    save();
}

function save() {
    let titleAsText = JSON.stringify(titles);
    let noteAsText = JSON.stringify(notes);
    localStorage.setItem('titles', titleAsText);
    localStorage.setItem('notes', noteAsText);
}

function load() {
    let titleAsText = localStorage.getItem('titles');
    let nameAsText = localStorage.getItem('notes');
    if (titleAsText && noteAsText) {
        titles = JSON.parse(titleAsText);
        notes = JSON.parse(noteAsText);
    }
}