# Use WebGL create cross-platform UI

Use JSX create WebGL Application or game.
Like React, but isn't React.

```tsx
import { CreateScene, Box, Text, JSX, engine } from 'vicuna';

class App extends Box {
  label: engine.Text;
  componentDidMount(){
    this.label.fontSize = 50;
  }
  renderJSX() {
    return (
      <Box>
        <Text ref={r => (this.label = r)}>Hello world</Text>
      </Box>
    );
  }
}

CreateScene({
  RootComponent: App,
  type: 'v',
  statPosition: [30, 50],
  width: 1080,
  height: 1920,
});
```

vicuna is [MIT licensed](./LICENSE).
