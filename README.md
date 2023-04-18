# NewCombin Prueba De Front end React

Aplicacion en React que utiliza la libreria axios para consumir una Rest API del siguiente codigo -> [Member](https://github.com/newcombin/devskillsadv)

# Instrucciones de Instalacion

* Clonar este repositorio: `git clone https://github.com/c-m-a/citizen-test.git`
* Ubicarse en el directorio: `cd citizen-test`
* Instalar las dependencias: `npm i`
* Luego modificar las variables de entorno *username, password y host* en el archivo .env

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

