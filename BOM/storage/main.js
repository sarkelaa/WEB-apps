const setLocalStorage = (key, value) => localStorage.setItem(key, value);

const printLocalStorage = () => {

    const data = [];
    for (const key in localStorage) {

        data.push(localStorage[key]);
    }

    const [age, name, occupation, surname] = data;
    console.log(`${name} ${surname}, ${age} years old, ${occupation}`);

}

const removeFromLocalStorage = key => localStorage.removeItem(key);

// setLocalStorage("name", "Ivan");
// setLocalStorage("surname", "Balic");
// setLocalStorage("age", "27");
// setLocalStorage("occupation", "student");

printLocalStorage();

// removeFromLocalStorage("occupation");

// setLocalStorage("occupation", "personal trainer");



