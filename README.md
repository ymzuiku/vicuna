# Use WebGL create cross-platform UI

Use JSX create WebGL Application or game.

Like React, but isn't React.

注意！！此库从0实现React风格相关的JSX解析，并以WebGL进行绘图，从而达到接近原生的性能，但是此库没有再继续维护。
并且并没有完全实现所有React生命周期和state、SetSate功能，请不要使用，仅可以作为一个提高前段渲染性能的思路参考。

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
