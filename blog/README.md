# 📝 Guía para Agregar Nuevas Actividades al Blog

Esta carpeta contiene todas las páginas de blog/actividades del Grupo Scout 3 Javier. Sigue estas instrucciones para agregar nuevas actividades de manera consistente.

## 📁 Estructura de Archivos

```
blog/
├── index.html                    # Página índice con todas las actividades
├── blog-dia-familia.html         # Ejemplo: Actividad individual
├── blog-campamento-familiar.html # Ejemplo: Actividad individual
├── blog-earth-tribe.html         # Ejemplo: Actividad individual
└── README.md                     # Este archivo
```

## ✅ Pasos para Agregar una Nueva Actividad

### 1. Crear la Página HTML Individual

1. Copia una de las páginas existentes como plantilla (recomendado: `blog-dia-familia.html`)
2. Renombra el archivo siguiendo el formato: `blog-nombre-actividad.html`
   - Ejemplos: `blog-campamento-verano-2025.html`, `blog-ceremonia-promesa.html`
3. Edita el contenido:
   - Actualiza el `<title>` en el `<head>`
   - Cambia el `<h1>` con el título de la actividad
   - Modifica la fecha y ubicación
   - Actualiza la imagen principal (`src="../images/nombre-imagen.jpg"`)
   - Escribe el contenido del artículo
   - Actualiza los enlaces de navegación (anterior/siguiente)

### 2. Agregar al Índice de Blog

Edita `blog/index.html` y agrega una nueva tarjeta dentro del `<div class="grid">`:

```html
<article class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
    <a href="blog-nombre-actividad.html">
        <img src="../images/foto-actividad.jpg" alt="Nombre de la Actividad" class="w-full h-56 object-cover">
    </a>
    <div class="p-6">
        <div class="flex items-center text-sm text-gray-500 mb-3">
            <i class="fas fa-calendar-alt mr-2"></i>
            <span>DD de mes, AAAA</span>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-3 hover:text-green-600 transition duration-300">
            <a href="blog-nombre-actividad.html">Título de la Actividad</a>
        </h2>
        <p class="text-gray-600 mb-4">
            Resumen breve de la actividad (2-3 líneas)...
        </p>
        <div class="flex items-center justify-between">
            <span class="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                Categoría
            </span>
            <a href="blog-nombre-actividad.html" class="text-green-600 hover:text-green-700 font-semibold transition duration-300">
                Leer más <i class="fas fa-arrow-right ml-1"></i>
            </a>
        </div>
    </div>
</article>
```

### 3. (Opcional) Agregar a la Página Principal

Si quieres destacar la actividad en la página principal (`../index.html`), edita la sección de actividades y agrega/reemplaza una de las tarjetas existentes.

## 🎨 Categorías Sugeridas

Usa estas categorías en las tarjetas con los colores correspondientes:

- **Evento Familiar** → `bg-green-100 text-green-700`
- **Campamento** → `bg-blue-100 text-blue-700`
- **Reconocimiento** → `bg-yellow-100 text-yellow-700`
- **Servicio** → `bg-purple-100 text-purple-700`
- **Capacitación** → `bg-red-100 text-red-700`
- **Excursión** → `bg-indigo-100 text-indigo-700`

## 📸 Gestión de Imágenes

1. Guarda todas las imágenes en la carpeta `../images/`
2. Usa nombres descriptivos: `campamento-verano-2025.jpg`, `ceremonia-promesa-abril.jpg`
3. Optimiza las imágenes antes de subirlas (tamaño recomendado: máximo 1MB)
4. Asegúrate de usar la ruta correcta: `../images/nombre-imagen.jpg`

## 📋 Checklist para Nueva Actividad

- [ ] Crear archivo HTML con nombre descriptivo
- [ ] Actualizar título y metadatos
- [ ] Cambiar fecha y ubicación
- [ ] Actualizar imagen principal
- [ ] Escribir contenido completo del artículo
- [ ] Revisar enlaces de navegación
- [ ] Agregar tarjeta en `blog/index.html`
- [ ] (Opcional) Agregar a página principal
- [ ] Verificar que todos los enlaces funcionen
- [ ] Probar en móvil y desktop

## 🔗 Enlaces Importantes

Recuerda que dentro de la carpeta `/blog/`, todos los enlaces deben usar rutas relativas:

- Página principal: `../index.html`
- Imágenes: `../images/`
- CSS: `../style.css`
- JavaScript: `../script.js`
- Otras páginas de blog: `blog-nombre.html` (sin ../)

## 💡 Consejos

1. **Mantén la consistencia**: Usa el mismo formato y estructura en todas las páginas
2. **Optimiza SEO**: Usa títulos descriptivos y alt text en las imágenes
3. **Fechas**: Ordena las actividades de más reciente a más antigua en el índice
4. **Contenido**: Incluye fotos, anécdotas y detalles que hagan la historia interesante
5. **Llamados a la acción**: Siempre incluye un botón para contactar o unirse al grupo

## 📞 ¿Necesitas Ayuda?

Si tienes dudas sobre cómo agregar una nueva actividad, revisa las páginas existentes como referencia o contacta al administrador del sitio web.

---

**Última actualización:** Enero 2025
**Mantenido por:** Grupo Scout 3 Javier
