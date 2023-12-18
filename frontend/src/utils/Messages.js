let colors = {
    "$helpColor": "#8E909F",
    "$backgroundColor": "#E9EAEC",
    "$cardColor": "#094c58",
    "$navColors": "#094c58",
    "$elementsColor": "#1A7275",
    "$infColor": "#FAD02C",
    "$nextColor": "#9AB8CE"
}

let messages = {
    "register": {
        "exists": {
            "body":"Użytkownik o podanych danych już istnieje",
            "color": colors["$elementsColor"]
        },
        "invalidCredentials": {
            "body":"Sprawdź czy wpisnao poprawny email i hasło",
            "color": colors["$elementsColor"]
        }
    },

    "addPost": {
        "tooManyFiles": {
            "body": "Chcesz przesłać za dużo plików, limit to 4",
            "color": colors['$infColor']
        },
        "wrongFormat": {
            "body": "Przesłany plik musi być zdjęciem lub filmem",
            "color": colors['$infColor']
        },
        "overweight": {
            "body": "Przesłane pliki ważą więcej niż 50mb",
            "color": colors['$infColor']
        },
        "unfixedErrors": {
            "body": "Możesz przesłać tylko 4 pliki (zdjęcie lub film), o wadze do 50mb",
            "color": colors['$infColor']
        }
    }
}
export default messages