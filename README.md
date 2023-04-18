# NewCombin Prueba De Front end React

Aplicacion en React que utiliza la libreria axios para consumir una Rest API del siguiente codigo -> [Member](https://github.com/newcombin/devskillsadv)

# Instrucciones de Instalacion

* Clonar este repositorio: `git clone https://github.com/c-m-a/citizen-test.git`
* Ubicarse en el directorio: `cd citizen-test`
* Instalar las dependencias: `npm i`
* Luego modificar las variables de entorno en el archivo .env

```bash
vscode .env
```

o con VIM

```bash
vim .env
```

* Ejecutar
```bash
npm run dev
```

## Validaciones de la API
* **firstName, lastName y address:** más de 1 caracter, sin espacios a los costados (trim).
* **SSN:** debe tener el siguiente formato ###-##-#### (cada # es un número, los guiones son obligatorios).
* Si el front no cumple con las validaciones, se debe deshabilitar el botón de enviar.

## Condiciones y tips
* Los colores y formas son de caracter ilustrativo.
* No es necesario que sea mobile responsive.
* No es necesaria compatibilidad con IE o Edge.
* Se puede usar ES6 y HTML5 sin problemas.
* Se puede usar google :D.
* Se puede usar POSTMAN para verificar el funcionamento de la API.
* Crear un archivo README.md para indicar cómo se debe ejecutar la aplicación.
* Subir a un repositorio git con privilegios públicos de lectura y compartir el link como resultado.
