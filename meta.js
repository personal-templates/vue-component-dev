module.exports = {
  prompts: {
    componentName: {
      type: 'string',
      label: 'Vue component name(every word use \'-\' split)',
      default: 'vue-component'
    },
    libraryName: {
      type: 'string',
      label: 'Global export variable name',
      default: 'VueComponent'
    },
    author: {
      type: 'string',
      label: 'Author'
    },
    license: {
      type: 'string',
      label: 'License',
      default: 'MIT'
    },
    cssPreProcessor: {
      message: 'Which CSS preprocessor you want to use?',
      type: 'list',
      choices: [
        {
          name: 'CSS',
          value: 'css'
        },
        {
          name: 'Less: import less and less-loader',
          value: 'less'
        },
        {
          name: 'Sass: import sass and sass-loader',
          value: 'sass'
        }
      ]
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?'
    }
  },

  helpers: {
    toPascalName: function (name) {
      return name.split('-').map(function (variable) {
        return variable[0].toUpperCase() + variable.slice(1, variable.length);
      }).join('');
    }
  },

  completeMessage: 'Done with vue-component-dev template! Have a fun!'
}