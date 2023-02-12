import { html } from 'lit';
import '../src/cyber-chad-jpc.js';

export default {
  title: 'CyberChadJpc',
  component: 'cyber-chad-jpc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <cyber-chad-jpc
      style="--cyber-chad-jpc-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </cyber-chad-jpc>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
