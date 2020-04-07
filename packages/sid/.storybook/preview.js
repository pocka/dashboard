import { setCustomElements } from '@storybook/web-components'

const customElements = require.context(
  '../src?spec',
  true,
  /\/sid-.+\/index\.ts$/
)

const mergedSpec = customElements
  .keys()
  .map(key => customElements(key))
  .reduce((a, b) => ({ ...a, ...b, tags: [...a.tags, ...b.tags] }), {
    tags: []
  })

if (process.env.NODE_ENV === 'development') {
  const consoleLabel = "CustomElements's stats"
  console.groupCollapsed(consoleLabel)
  console.dir(mergedSpec)
  console.groupEnd(consoleLabel)
}

setCustomElements(mergedSpec)
