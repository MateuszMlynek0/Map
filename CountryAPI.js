export default class CountryAPI {
    static getAllNotes() {
        const country = JSON.parse(localStorage.getItem("path") || "[]");

        // Sort by update date
        return country.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }


    static saveNote(countryToSave) {
        const country = CountryAPI.getAllNotes();
        const existing = country.find(country => country.id == countryToSave.id);
        //edit / update
        if (existing) {
            existing.title = countryToSave.title;
            existing.body = countryToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            countryToSave.id = Math.floor(Math.random() * 1000000);
            countryToSave.updated = new Date().toISOString();
            country.push(countryToSave);
        }

        localStorage.setItem("path", JSON.stringify(country));
    }
    static deleteNote(id) {
        const country = CountryAPI.getAllNotes();
        const newCountry = country.filter(country => country.id != id);

        localStorage.setItem("path", JSON.stringify(newCountry));
    }

}





