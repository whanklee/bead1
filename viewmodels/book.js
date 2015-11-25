//Viewmodel réteg
var statusTexts = {
    'new': 'Új',
    'reading': 'Olvasás',
    'ready': 'Kész',
    'giving': 'Kölcsönadva',
    'pending': 'Felfüggesztve',
};
var statusClasses = {
    'new': 'info',
    'reading': 'default',
    'ready': 'success',
    'giving': 'warning',
    'pending': 'info',
};

function decorateBooks(bookContainer) {
    return bookContainer.map(function (e) {
        e.statusText = statusTexts[e.status];
        e.statusClass = statusClasses[e.status];
        return e;
    });
}

module.exports = decorateBooks;