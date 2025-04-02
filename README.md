# Zustand övningar

## Köra koden
```bash
# Ladda ner projektet
git clone https://github.com/ha-fed24-jsf/11-zustand.git

# Installera alla paket som länkas i package.json
npm install

# Öppna koden
code .

# Starta
npm run dev
```


## Mappstruktur
Så här är projektet strukturerat.

"Feature folders" innebär att man organiserar komponenter i mappar

```
src
|-- /components - en mapp för varje feature
|   |- /clicker
|   |- /pronto
|   |- /radio
|   |- /users
|
|-- /data - stores och data
|   |- countStore.js
|   |- userStore.js
|   |- users.js - data
|
|- App.css
|- App.jsx
|- index.css
|- main.jsx
```
