import { html } from 'lit-html'
import '.'

export default {
  title: 'sid-layout',
  component: 'sid-layout'
}

export const demo = () => html`
  <sid-layout>
    <span slot="secondary">Bar</span>
    Foo
  </sid-layout>
`
