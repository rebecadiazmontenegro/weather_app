# Weather Info

Ejercicio para practicar **useEffect**, asincronía y componentización en React.

## Objetivos del ejercicio

- Practicar `useEffect` para ejecutar llamadas a APIs.
- Gestionar estados asincrónicos con `fetch` o `axios`.
- Dividir la interfaz en componentes reutilizables.
- Implementar un formulario controlado.

## Componentes requeridos

### WeatherList
Componente encargado de mostrar la lista de días del pronóstico extendido.

### WeatherCard
Componente que muestra la información detallada del clima para un día concreto:
- Horario
- Temperatura
- Estado del tiempo (clear, clouds, rain…)
- (Extra 1) Imagen representativa del estado del tiempo

### Formulario de búsqueda
Input de texto + botón para buscar una ciudad.  
Al enviar el formulario, se actualizan los datos meteorológicos.

## Flujo de la vista

1. En la carga inicial se muestra el pronóstico extendido de **Madrid**.  
   (Extra 2) Reemplazar Madrid por la geolocalización del usuario usando `navigator.geolocation`.

2. Al introducir una nueva ciudad en el input y hacer click en el botón, la información se actualiza.

3. `WeatherList` recorre la lista de días y cada día se muestra con un `WeatherCard`.

## Tips

- Usar el paquete `uuid` para generar keys únicas.  
  Instalar con:

## Despliegue
```url
https://weatherapprebeca.netlify.app/
```
## Tecnologías utilizadas

- **React** — Librería principal para construir la interfaz.
- **Vite** — Herramienta de desarrollo rápida para crear el proyecto.
- **JavaScript (ES6+)** — Lógica y componentes.
- **CSS / SCSS** — Estilos de la aplicación.
- **Fetch API o Axios** — Llamadas a la API meteorológica.
- **UUID** — Generación de keys únicas para listas.
- **OpenWeatherMap API** — Fuente de datos meteorológicos.
- **Navigator Geolocation API** (opcional) — Para obtener la ubicación del usuario.
