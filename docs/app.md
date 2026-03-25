---
outline: deep
---

# Documentación

Demosracion de documentación al vuelo de VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import metodos from '../src/assets/metodos.js'


</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
//import { useData } from 'vitepress'
//import { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';
import metodos from '../src/assets/metodos.js'

//const { site, theme, page, frontmatter } = useData()
</script>

## Result

### Ejemplo de Metodos

<pre>{{ metodos }}</pre>
