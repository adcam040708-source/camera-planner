# @muraguchi/camera-planner

3D Camera Position Planner component for the Muraguchi AI film creation platform.

## Quick Start

```bash
npm install @muraguchi/camera-planner three react react-dom
```

```tsx
import { CameraPlanner } from '@muraguchi/camera-planner'
import '@muraguchi/camera-planner/dist/style.css'

function MyPage() {
  return (
    <CameraPlanner
      projectId="my-project"
      apiUrl="/api/camera-planner"
      onCameraChange={(camera) => console.log('changed:', camera)}
      onCameraSelect={(id) => console.log('selected:', id)}
    />
  )
}
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Architecture

- **engine/** — Three.js 3D engine (SceneEngine, CameraRig, ObjectLib, LightSystem, PathSystem, RayPicker, calc)
- **components/** — React UI components
- **store/** — Zustand state management
- **io/** — I/O interface (InputManager, OutputManager, ApiClient)
- **types/** — TypeScript type definitions
- **presets/** — Sensor, movement, lighting, scene presets

## I/O Protocol

Camera Planner communicates with the host project through two channels:

- **InputManager** — Host pushes data into the planner
- **OutputManager** — Planner emits events when data changes

See `src/io/` for the full API.

## License

MIT
