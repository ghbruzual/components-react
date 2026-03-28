# ⚡ React Component Collection

Una colección de componentes interactivos desarrollados con **React + Vite**, enfocada en buenas prácticas, lógica centralizada y escalabilidad.

## 🕹️ Componentes Actuales

### 1. Counter (Contador Inteligente)

Un contador que va más allá de lo básico, implementando un manejador de acciones maestro.

- **Lógica Centralizada:** Uso de una única función `handleCounter` para procesar incrementos, decrementos, resets y valores aleatorios.
- **Estado Seguro:** Implementación del patrón de actualización funcional (`setCounter(prev => prev + n)`) para evitar colisiones en renders rápidos.
- **Azar Dinámico:** Generación de valores aleatorios calculados en el momento de la ejecución.

---

## 📋 Tabla de Componentes

| Componente                       | Descripción Técnica                                                                                                         | Estado        |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------------ |
| **[Counter](./src/Counter.jsx)** | Lógica centralizada (`Master Handler`), actualizaciones funcionales de estado y generación de valores aleatorios dinámicos. | ✅ Completado |
| **Form / Login**                 | Manejo de formularios controlados, validación de esquemas y gestión de errores en tiempo real.                              | ⏳ En proceso |
| **API Gallery**                  | Consumo de servicios externos (REST API) con `useEffect`, manejo de estados de carga (Loading) y errores.                   | 📅 Planeado   |

## 🛠️ Tecnologías

- React 18
- Vite
- CSS Moderno
- Git / SSH para control de versiones
