import {{ toPascalName componentName }} from './components';

{{ toPascalName componentName }}.install = function (Vue) {
  Vue.component({{ toPascalName componentName }}.name, {{ toPascalName componentName }});
};

export default {{ toPascalName componentName }};
