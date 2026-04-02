# web_project_cultures

## 📁 Estructura del proyecto

El proyecto está organizado de manera modular siguiendo principios de **POO** y la metodología **BEM** para los estilos.

# 🌍 Culturas Antiguas — Aplicación Web Interactiva

Aplicación web desarrollada con **HTML, CSS y JavaScript**, donde los usuarios pueden **crear, editar, eliminar y dar “like”** a tarjetas informativas sobre culturas antiguas.  
El proyecto implementa una arquitectura **modular basada en POO**, y utiliza la metodología **BEM** para mantener un CSS escalable y organizado.

---

## 🚀 Características principales

### 🖼️ Gestión de tarjetas
- Crear nuevas tarjetas con imagen, título y descripción.
- Editar tarjetas existentes mediante formularios modales.
- Eliminar tarjetas dinámicamente.
- Dar “like” a cada tarjeta con contador actualizado en tiempo real.
- Visualizar la imagen ampliada en un **modal interactivo**.

### 👤 Gestión de usuario
- Crear un usuario.
- Editar nombre, descripción y avatar.
- Renderizado dinámico de la información del usuario.

### 🧩 Arquitectura modular (POO)
El proyecto está dividido en clases independientes para mantener un código limpio y reutilizable:

- **Card** → Maneja la creación y comportamiento de cada tarjeta.
- **Section** → Renderiza listas de tarjetas.
- **Popup** → Clase base para ventanas modales.
- **PopupWithForm** → Maneja formularios de edición/creación.
- **PopupWithImage** → Muestra imágenes ampliadas.
- **UserInfo** → Controla la información del usuario.
- **index.js** → Punto de entrada de la aplicación.

### 🎨 Estilos con BEM
Los estilos están organizados en la carpeta `blocks/`, siguiendo la metodología **BEM (Block, Element, Modifier)** para mantener un CSS modular y fácil de mantener.

---

## 🛠️ Tecnologías utilizadas

- **HTML5**
- **CSS3** (BEM)
- **JavaScript (ES6+)**
- **Programación Orientada a Objetos**
- **Modularización con import/export**
- **Live Server** para ejecutar el proyecto

---

## 📁 Estructura del proyecto


web_project_cultures/
├── blocks/                 # Estilos CSS organizados por bloques BEM
│   ├── card.css
│   ├── cards.css
│   ├── content.css
│   ├── footer.css
│   ├── header.css
│   ├── page.css
│   ├── popup.css
│   └── profile.css
│
├── images/                 # Imágenes del proyecto
│
├── pages/
│   └── index.css           # Estilos específicos de la página principal
│
├── scripts/
│   ├── components/         # Clases modulares en JavaScript (POO)
│   │   ├── cards.js        # Clase Card
│   │   ├── popup.js        # Clase base Popup
│   │   ├── popupwithform.js
│   │   ├── popupwithimage.js
│   │   ├── section.js
│   │   └── userinfo.js
│   └── index.js            # Punto de entrada de la aplicación
│
├── vendor/                 # Recursos externos
│   ├── fonts/
│   ├── fonts.css
│   └── normalize.css
│
├── .prettierignore         # Configuración de Prettier
├── index.html              # Estructura principal del DOM
└── readme.md               # Documentación del proyecto


---

## ▶️ Cómo ejecutar el proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/TU-REPO.git
   2. 	Abre la carpeta del proyecto en VS Code.
3. 	Ejecuta Live Server sobre .
4. 	La aplicación se abrirá en tu navegador.

## 🙍‍♂️Autor
    German Gallo
    📎GitHub:
    📌 Proyecto: 
## 📄 Nota

Este proyecto es de uso personal y educativo.  
El código puede consultarse libremente en el repositorio, pero no está destinado a distribución o uso comercial.

