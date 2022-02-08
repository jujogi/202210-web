# ♻️ GIT

## ¿Qué es?
Sistema de control de versiones. Se acabaron los "EsteSiEs", "FinalFinalNoDaMas", "EsteSiV2" 😆

## Beneficios
-   Trabajo colaborativo
-   Copias de seguridad
-   Regresar a versiones anteriores
-   Crear versiones separadas (ramas)

## ¿Cómo empezar?

- `git init`: Inicializar el nuevo repositorio
- `git checkout -b develop`: Crear una nueva rama llamada `develop`
- `git status`: Mirar que archivos fueron actualizados, creados o eliminados
- `git add * / git add <filename>`: Agregar todos los cambios del proyecto
- `git commit -m "Mi commit debe ser conciso y diciente"`: Confirmo los cambios guardados en el anterior comando
- `git push`: Subir los cambios al repositorio
- Subir mi proyecto a Github Pages!

## ¿Trabajo en equipo? Los mayores temores de GIT
- ¿Como dividir el trabajo en ramas?
- ¿Qué es un pull request?
- `git merge <branch_name>`: Fusionar los cambios de mi rama con una rama principal. Evito conflictos.

## Github Pages
- 1. Settings
- 2. Pages
- 3. Source: Seleccionar la rama
- 4. Nuestro archivo principal debe llamarse `index.html`. (En minúsculas)
- 5. La url de mi página debe ser: `https://<githubUser>.github.io/<repoName>`