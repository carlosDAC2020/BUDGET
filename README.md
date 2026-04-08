# BudgetApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



## observaciones 
al relaizar experimentos implementando este procolo llegamos a lguna sconlcuiones con rpetco a algunos puntos 

primeor es problema multi legual al idnetifcar el dominio palabra palabra usnado un bag of word simple no es suficiente en distitos idiomas exspecificmnete prbando en ingle sy español se tien el problema de q el dominio en muchso dominios tien a ser 0 por  al estra las palabras clave en un isidoma y el tine  en otra no c encuentran lo q genra una prppagacion d eeste erorr a todos los items y por ende al claculo del scorev 

suamdmo al echo de q hay q contemprar q las noticias a valdiadr tiene distintos tipos y por ende la caracterizaciond ebrioa ser adaoatda segun el tipo de noticia 

limitcion de fuentes , actualemnte solo tenemos en cuenta 3 fuientes y nos limitamos a bsuqedas fijas , no se valida la claidad d ela informacion lo q peude generar falsos positivos 

pesos de factores fijos , actualemnte asignamos los valores de los factores de una forma dvirtriaria insistintamemnte ekl item de informaicon y su relevancia , seria bueno tenr una fora de asigarlos de forma dinamica segun el tipo de noticia , dominio u origen de informacion con la q se este contrastando 


## trabajos futuros 
coneptualmente la vision de la logica  q se ha ehco para este protcolo va muy de la mano por lo propuesto por andra varchos y sebastian readel en 2014, la idea a seguir es si ya se tiene una ide de obtencion de una metrica de veracidad, podemos aplica rla logica seguida por varchos en sus posteriorrs trabajos dodne planeta as sub etapas en la logic ade verificacion y llevar al prtoclo ltv a este estandar fe fact-checking

algunos de los componentes amejorar serian los siguientes 

mejroa en la caracterizacion , poder indetificar m¿el tipo de noticia, su dominio especifico llevando l afirmacion hasta la descomposicion en preguntas a reponder 

implementar un evidencen retrieval solido apollado por la verzatilidad eficiencia y proactiviad de arquitetcuras agentic AI actuale es apollados por procolos como mcp, skills y demas herrmaientas de apollo para los agentes

implementacion de motor de pesos dinamicos  que sea capas de idnetificar el nivle de improtancia d ecada factor segun el tipo de item de infromacion, dominio y origen 

