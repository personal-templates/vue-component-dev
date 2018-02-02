# {{ componentName }} [![npm package](https://img.shields.io/npm/v/{{ componentName }}.svg)](https://www.npmjs.com/package/{{ componentName }})
{{ description }}

## Example

## Feature

## Install

`npm install {{ componentName }} -s`

## 用法

Local import
```
import {{ toPascalName componentName }} from '{{ componentName }}';

// demo.vue
...
export default {
  components: {
    {{ toPascalName componentName }}
  }
}
```

Global import
```
import {{ toPascalName componentName }} from {{ componentName }};
import Vue from 'vue';

Vue.use({{ toPascalName componentName }});
```

Broswer import
```
// 全局暴露变量 {{ libraryName }}
<script src="../dist/{{ componentName }}.js"></script>
<script>
  new Vue({
    el: '#app',
    components: {
      GalleryLayout
    }
  })
</script>
```
```

### Props

## LICENSE

{{ LICENSE }}
