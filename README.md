# Upravljanje stanjem u React aplikaciji pomoću Zustand biblioteke
**ToDo App** je jednostavna aplikacija za upravljanje zadacima — kreirana u Reactu fokusirana na demonstraciju korišćenja Zustand biblioteke za upravljanje globalnim stanjem aplikacije.

# Sadržaj
- [Tehnologije](#tehnologije)
- [React](#React)
- [Upravljanje stanjem(State menagment) u React aplikacijama](#upravljanje-stanjemstate-menagment-u-react-aplikacijama)
- [Zustand](#zustand)
- - [Poređenje sa Redux-om](poređenje-sa-redux-om)
- - [Uloga Zustanda u ovom projektu](#uloga-zustanda-u-ovom-projektu)
- [Struktura projekta](#struktura-projekta)
- [Pokretanje projekta](#pokretanje-projekta)

## Tehnologije
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Json-server](https://www.npmjs.com/package/json-server)
- [React Router](https://reactrouter.com/)

## React
React je popularna JavaScript biblioteka za izgradnju interaktivnih korisničkih interfejsa. React se zasniva na komponentama – malim, izolovanim delovima korisničkog interfejsa koji imaju sopstveno stanje i ponašanje. Upravljanje stanjima (state management) u React aplikacijama je jedan od najvažnijih aspekata razvoja, jer omogućava sinhronizaciju prikaza sa podacima i korisničkim interakcijama. Kako aplikacija raste, potreba za deljenjem stanja između više komponenti postaje neizbežna, zbog čega se koriste rešenja za globalno upravljanje stanjima.

U ovom projektu obrađuje se **Zustand**, efikasna biblioteka za upravljanje stanjem, koja nudi jednostavan API kao alternativu većim bibliotekama poput Redux-a.

## Upravljanje stanjem(State menagment) u React aplikacijama
React u svojoj osnovi pruža osnovne mehanizme za upravljanje stanjima preko *useState* i *useContext* hookova. Za lokalno stanje koristi se `useState`, dok se `useContext` može koristiti za deljenje stanja između komponenti. Međutim, ove metode imaju ograničenja kada aplikacija postane složena:
- Teško je pratiti promene kada više komponenti menja isto stanje
- Dolazi do takozvanog "prop drilling"-a (prosleđivanje podataka iz jednog komponentnog nivoa ka dubljim komponentama ka dubljim komponentama kroz više međukomponenti koje te podatke uopšte ne koriste, ali ih   samo prosleđuju dalje)
- Potrebna je bolja skalabilnost i modularnost

Zbog toga se javlja potreba za centralizovanim store-ovima, pojavile su se brojne biblioteke za upravljanje stanjima, kao što su *Redux*, *MobX*, *Recoil*, *Zustand*.

## Zustand
Zustand je minimalistička i skalabilna biblioteka za upravljanje stanjem u React aplikacijama. Koristi hook-based API i omogućava jednostavan i efikasan pristup globalnom stanju bez potrebe za kontekstima, provider-ima ili reducers. Zustand omogućava jednostavno kreiranje globalnog stanja bez potrebe za dodatnim "boilerplate" kodom, kakav je čest kod Redux-a.
- Kreiranje store-a: Store u Zustand-u je jednostavna funkcija koja koristi create iz zustand paketa. Unutar nje definišemo: *stanje (state)*: svi podaci koje želimo da delimo kroz aplikaciju i *akcije (actions)*: metode koje menjaju stanje
> interface TaskStore {
>  tasks: string[];
> addTask: (task: string) => void;
> }
>
> export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));
- Pristupanje store-u: U komponentama pristupamo stanju pomoću custom hook-a (useTaskStore) i najčešće koristimo dekonstrukciju objekta (object destructuring)
> const { tasks, addTask } = useTaskStore();
- Selektori:  koristi se kada ne želimo da se komponenta re-renderuje zbog promene nebitnih delova stanja. (selektore "odvajaju" samo ono što komponenta koristi)
> const tasks = useTaskStore((state) => state.tasks);

- Stanje se menja pozivanjem akcija (actions) koje su deo store-a
>addTask("Novi zadatak");

### 🔄 Poređenje sa Redux-om

| Stavka         | Zustand                   | Redux                     |
|----------------|---------------------------|---------------------------|
| API složenost  | Jednostavan               | Složen (actions, reducers)|
| Boilerplate    | Minimalan                 | Opsežan                   |
| Integracija    | Direktna (`useStore`)     | Potrebni `Provider` i `connect` |
| Performanse    | Odlične (subscribers)     | Dobre, ali zahteva podešavanje |
| Curva učenja   | Blaga                     | Strma                     |

Zbog svih ovih prednosti, Zustand je idealan izbor za projekte srednje veličine gde je potrebna fleksibilnost, jednostavnost i održivost koda bez komplikacija koje dolaze sa Redux-om.

### Uloga Zustanda u ovom projektu
U ovom projektu, Zustand se koristi za:
- Upravljanje korisničkim autentifikacionim stanjem (ulogovan/izlogovan)
- Čuvanje i manipulaciju listom zadataka (dodavanje, ažuriranje, brisanje, prebacivanje statusa)
- Otvaranje i zatvaranje modala
- Komunikaciju između nepovezanih komponenti (npr. modal i task kartica)

State se definiše jednom, a koristi se bilo gde u aplikaciji pomoću jednostavnog hook-a useTaskStore ili useAuthStore.

## Struktura projekta
```bash
src/
├── components/
│   └── PrimaryHeader.tsx
├── pages/
│   ├── login-page/
│   └── user-landing-page/
├── store/
│   ├── useAuthStore.ts
│   └── useTaskStore.ts
├── router/
│   └── AppRouter.tsx
└── App.tsx
```

## Pokretanje projekta
### 1. Kloniranje repozitorijuma

```bash
mkdir zustand-react-tutorial
git clone https://github.com/katarinalazarevic/zustand-react-tutorial.git
cd app
```
### 2. Instalacija paketa 
```bash
npm install
```
### 3. Pokretanje json-server API-ja 
```bash
json-server --watch db.json --port 5000
```
### 4. Pokretanje React aplikacije 
```bash
npm start
```
### Podrazumevani korisnici (primer)
```bash
{
  "users": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "password": "Sifra.123"
    }
  ]
}
```
