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
    }
}
export default messages