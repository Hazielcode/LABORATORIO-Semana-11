# 🚀 Laboratorio Semana 11: Ecosistemas Avanzados en Next.js (App Router)

¡Bienvenido al repositorio del **Laboratorio 11** para el curso de **Desarrollo de Aplicaciones Web Avanzado**! 🎓

Este repositorio monorepo alberga dos proyectos desarrollados con el ecosistema de **Next.js 15+** y **React**, cada uno demostrando distintos patrones arquitectónicos y enfoques para el desarrollo de interfaces y estilización.

## 📂 Estructura del Repositorio

El laboratorio se divide en dos aplicaciones independientes:

### 1. `next-components-styling` (Estilización Híbrida)
Un proyecto enfocado en la construcción de componentes de UI desde cero utilizando un enfoque híbrido de estilización.
- **Tecnologías:** CSS Modules (para lógica condicional/efectos complejos) + Tailwind CSS (para Layouts y Utilitarios).
- **Destacado:** Implementación de interacciones CSS avanzadas, animaciones, `keyframes` y diseño 100% responsivo sin depender de bibliotecas externas pesadas.

### 2. `next-shadcn-ui` (Dashboard Profesional)
Un panel administrativo dinámico completamente funcional construido bajo estándares corporativos.
- **Tecnologías:** Shadcn/ui (Radix UI + Tailwind), Context API y React Hooks.
- **Destacado:** 
  - Gestión de **Estado Global en Memoria** para implementar operaciones CRUD fluidas e interconectadas.
  - Vistas controladas por pestañas (Resumen, Proyectos, Tareas, Equipo).
  - Utilización extensiva de Shadcn UI: `Dialog`, `Table`, `Pagination`, `Calendar`, `Spinner`, `Alert`, entre otros.

## ⚙️ Tecnologías Globales Usadas

- **[Next.js (App Router)](https://nextjs.org/)**: Framework principal de React para la generación de servidor y cliente.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estricto para escalar el código previniendo errores.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Motor de estilización moderno mediante utilitarios.
- **[Shadcn/UI](https://ui.shadcn.com/)**: Colección de componentes accesibles e hiper personalizables que integras directamente a tu código.
- **Turbopack**: Empaquetador de altísimo rendimiento para Next.js.

## 🛠️ Instalación y Uso Local

Para correr cualquiera de los dos proyectos de forma local, sigue estos pasos:

1. Ingresa al directorio del proyecto deseado:
   ```bash
   cd next-shadcn-ui # O: cd next-components-styling
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 👨‍💻 Autor
Desarrollado como parte integral de la maestría / curso universitario, apuntando a dominar la creación de interfaces de alto rendimiento con arquitecturas modernas.
