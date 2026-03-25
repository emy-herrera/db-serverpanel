# ⚛️ Plantilla Base React + Vite · Sistemas CRA

Esta plantilla está diseñada para iniciar proyectos React modernos de forma rápida, estructurada y escalable. Incluye una organización profesional de carpetas y configuraciones listas para producción.

---

## 🚀 Tecnologías incluidas

- ⚛️ https://reactjs.org/
- ⚡ https://vitejs.dev/
- 🧠 Hooks personalizados
- 📂 Arquitectura modular por carpetas
- 🧭 Soporte para rutas (`react-router-dom`)
- ✅ ESLint configurado con reglas recomendadas

---

## 🚧 Estado del proyecto

- [x] Instalacion de dependencias
- [x] Configuracion del entorno
- [x] Arranque del servidor
- [x] Configuracion de rutas
- [x] Creacion de los endpoints
- [x] Testing
- [] Producción

---
---
## ⚙️ Variables de entorno

| Variable         | Descripción                        | Ejemplo                |
|------------------|------------------------------------|------------------------|
| VITE_BACKEND     | URL base para la API REST          | `http://127.0.0.1:3000` |
| DEV  | variable para saber si estamos en desarrollo o produccion   | true
| PROD  |    | false


---

## 📁 Estructura del proyecto

```bash
.
├── public/           # Archivos estáticos públicos (favicon, index.html base, etc.)
├── src/
│   ├── assets/       # Imágenes, íconos, logos, fuentes, etc.
│   ├── components/   # Componentes reutilizables (botones, inputs, modales, etc.)
│   ├── config/       # Configuraciones globales (temas, constantes, endpoints)
│   ├── context/      # Contextos de React (Auth, Theme, etc.)
│   ├── hooks/        # Custom Hooks reutilizables
│   ├── pages/        # Vistas principales (Home, Login, Dashboard, etc.)
│   ├── routes/       # Definición de rutas y navegación
│   ├── services/     # Lógica de negocio, llamadas a APIs, utilidades
│   ├── styles/       # Estilos globales, variables CSS, temas
│   ├── App.jsx       # Componente raíz de la aplicación
│   └── main.jsx      # Punto de entrada, renderizado en el DOM
├── .env              # Variables de entorno
├── .gitignore        # Archivos y carpetas ignoradas por Git
├── eslint.config.js  # Configuración de ESLint
├── index.html        # HTML base para Vite
├── package.json      # Dependencias y scripts del proyecto
├── vite.config.js    # Configuración de Vite
└── README.md         # Documentación del proyecto

```
---

# 🌳 Flujo de ramas (Git)
- master ➡️ Produccion . solo se mergea aqui lo ya aprobado en integracion
- before_develop ➡️ integracion . Recibre los cambios de todas las ramas personasles y es la base para pruebas internas
## Ramas personales
- cada integrante trabaja en su rama personal con el formato nombre_dev (ej: emily_dev).
- Estas ramas salen de before_develop y se mergean hacia before_develop
  
### flujo de trabajo recomendado
```
#creamos la rama personal (una vez)
git checkout -b emily_dev
git push -u origin emily_dev

#trabajamos y subimos los cambios
git add .
git commit -m 'feat: componente Header con navegacion'
git push

#abrimos pull Request: emily_dev -> before_develop (revision,test,QA)
#una vez estable , abrir PR : before_develop -> master (despligue a produccion)


#mantenemos nuestra rama actualizada
git checkout emily_dev
git fetch origin
git merge origin/before_develop

⚠️PROHIBIDO COMMITEAR DIRECTAMENTE EN MASTER O BEFORE_DEVELOP . USA PULL REQUEST , REVISIONES Y CHECKS
````
## Convenciones de commits
- usa prefijos claros:
  ````
  feat: nueva funcionalidad
  fix: correcion de bug
  refactor: cambio interno sin funcionalidad nueva
  chore: tareas varias (build,deps..)
  docs: documentacion
  test: test
  ````

---

## 🛠️ Instalación y arranque
````
# Clonar el repositorio

git clone https://github.com/tu-usuario/tu-repo.git


# Instalar dependencias
npm install

# Arrancar el servidor de desarrollo
npm run dev

````

---
## 🧪 Scripts disponibles

````
npm run dev       # Arranca el servidor de desarrollo
npm run build     # Compila para producción
npm run preview   # Previsualiza el build de producción
npm run lint      # Ejecuta ESLint
````

---

## ✅ Buenas prácticas

- Usa componentes funcionales y Hooks.
- Mantén la lógica separada en \`services/\` y \`hooks/\`.
- Evita lógica en \`pages/\`, manténlas como contenedores.
- Usa \`context/\` para estados globales como autenticación o tema.
- Organiza los estilos en \`styles/\` y evita estilos en línea.

---
# 🔍 Consultas del Postman



https://emily-herrera-5cf78b7e-3783297.postman.co/workspace/emily_dev's-Workspace~dec685e5



---
## 🤝 Contribuir

1. Haz un fork del repositorio.
2. Crea una rama (\`git checkout -b feature/nueva-funcionalidad\`)
3. Haz tus cambios y haz commit (\`git commit -m 'Agrega nueva funcionalidad'\`)
4. Haz push a tu rama (\`git push origin feature/nueva-funcionalidad\`)
5. Abre un Pull Request.

---

## 👥 Créditos

Plantilla creada por el equipo de Sistemas CRA.  
Colaboradores principales: Emily Herrera

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

