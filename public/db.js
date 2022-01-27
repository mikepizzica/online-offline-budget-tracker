let db;
let request = indexedDB.open('BudgetDB', 1)

request.onupgradeneeded = function (event) {
    var database = event.target.result
    database.createObjectStore('Pending', {autoIncrement: true});
}

request.onsuccess = function (event) {
    db = event.target.result
    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function (event) {
    console.log(`Error ${event.target.errorCode}`);
};

function checkDatabase() {
    const transaction = db.transaction(['Pending'], 'readwrite');
    const store = transaction.objectStore('Pending');
    const getAll = store.getAll();
    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                  }
            })
            .then((response) => response.json())
            .then((data) => {
                const transaction = db.transaction(['Pending'], 'readwrite');
                const store = transaction.objectStore('Pending');
                store.clear();
            })
        }
    }
}

const saveRecord = (record) => {
    const transaction = db.transaction(['Pending'], 'readwrite');
    const store = transaction.objectStore('Pending');
    store.add(record);
}

window.addEventListener('online', checkDatabase);