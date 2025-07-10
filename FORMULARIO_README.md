# Formulario de Contacto - GenIA

Este formulario de contacto permite recopilar información de usuarios interesados y almacenarla en Firebase Firestore.

## ✨ Características

- Formulario responsivo con diseño moderno
- Validación de campos en tiempo real
- Almacenamiento en Firebase Firestore
- Mensajes de confirmación y error
- Iconos de React Icons
- Animaciones y efectos visuales

## 📦 Instalación

### 1. Dependencias necesarias

Las dependencias ya han sido instaladas en tu proyecto:

```bash
npm install firebase react-icons
```

### 2. Configuración de Firebase

1. **Crear proyecto en Firebase:**
   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Crea un nuevo proyecto o usa uno existente
   - Activa Firestore Database

2. **Obtener credenciales:**
   - Ve a Configuración del proyecto > General
   - En "Tus aplicaciones", agrega una aplicación web
   - Copia las credenciales de configuración

3. **Configurar variables de entorno:**
   - Crea un archivo `.env` en la raíz de tu proyecto
   - Agrega las siguientes variables con tus credenciales reales:

```env
# Configuración de Firebase
REACT_APP_FIREBASE_API_KEY=tu_api_key_aqui
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id_aqui
REACT_APP_FIREBASE_STORAGE_BUCKET=tu_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id_aqui
REACT_APP_FIREBASE_APP_ID=tu_app_id_aqui
```

### 3. Configurar Firestore

En Firebase Console:
1. Ve a Firestore Database
2. Crea una colección llamada `leads`
3. Configura las reglas de seguridad (ejemplo básico):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{document} {
      allow write: if true; // Permite escritura pública
      allow read: if false; // Prohibe lectura pública
    }
  }
}
```

## 🚀 Uso

El formulario ya está integrado en tu aplicación React. Aparece entre las secciones `WhatsAppSection` y `Finalcta`.

### Estructura de archivos creada:

```
GenIA/
├── src/
│   ├── components/
│   │   └── Formulario.jsx          # ✅ Creado
│   ├── css/
│   │   └── formulario.css          # ✅ Creado
│   ├── firebase.js                 # ✅ Creado
│   └── App.js                      # ✅ Actualizado
├── .env                            # ⚠️  Debes crear manualmente
└── FORMULARIO_README.md            # ✅ Creado
```

## 📊 Datos almacenados

El formulario almacena en Firestore los siguientes campos:

- `nombre`: Nombre del usuario
- `apellido`: Apellido del usuario  
- `correo`: Email del usuario
- `timestamp`: Fecha y hora de envío

## 🎨 Personalización

### Cambiar textos del formulario:

Edita directamente en `src/components/Formulario.jsx`:

```jsx
// Título y descripción
<h3 className="form-title">Tu título aquí</h3>
<p className="form-description">Tu descripción aquí</p>

// Texto del botón
{isSubmitting ? 'Enviando...' : 'Tu texto de botón'}

// Mensajes de confirmación
setMessage('Tu mensaje de éxito aquí');
setMessage('Tu mensaje de error aquí');
```

### Modificar estilos:

Edita `src/css/formulario.css` para cambiar:
- Colores del tema
- Tipografías
- Espaciados
- Efectos visuales

### Cambiar colección de Firebase:

En `src/components/Formulario.jsx`, línea 33:

```jsx
await addDoc(collection(db, 'tu_coleccion'), {
  // ...datos
});
```

## 🔧 Solución de problemas

### Error: "Firebase not configured"
- Verifica que el archivo `.env` esté en la raíz del proyecto
- Confirma que todas las variables empiecen con `REACT_APP_`
- Reinicia el servidor de desarrollo con `npm start`

### Error: "Permission denied"
- Revisa las reglas de Firestore
- Asegúrate de que la colección existe
- Verifica la configuración del proyecto Firebase

### Estilos no se aplican
- Confirma que importaste `formulario.css`
- Verifica que no hay conflictos con otros CSS
- Comprueba que las clases CSS estén correctamente definidas

## 📝 Dependencias utilizadas

**DEPENDENCIAS PRINCIPALES:**
- `firebase`: ^11.10.0
- `react-icons`: ^5.5.0

**DEPENDENCIAS QUE YA TIENES (React):**
- `react`: ^19.1.0
- `react-dom`: ^19.1.0

## ⚠️ Siguiente paso importante

**Debes crear manualmente el archivo `.env` en la raíz de tu proyecto** con tus credenciales de Firebase para que el formulario funcione correctamente.

## 📝 Licencia

Este código es de uso libre para proyectos de GenIA / Adereso AI. 