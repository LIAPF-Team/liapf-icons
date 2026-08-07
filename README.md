# LiapfIcons

Okalit Component: Icons for Liapf

## Installation

```bash
okalit add liapf-icons --registry github.com/your-org/your-catalog
```

Or manually copy to your project:

```bash
# The component will be installed in src/catalogs/liapf-icons/
```

## Usage

```js
import '@catalogs/liapf-icons/liapf-icons.js';
```

```html
<liapf-icons
  icon="document"
  color="text"
  size="90"
  @on:click="${handler}"
></liapf-icons>
```

## Props

| Name | Type | Default |
|------|------|---------|
| `icon` | `String` | `"document"` |
| `color` | `String` | `"text"` |
| `size` | `String` | `"90"` |

## Events

| Name |
|------|
| `on:click` |

## License

MIT
