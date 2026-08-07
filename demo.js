import '@okalit/demo-components';
import './src/liapf-icons.js';

const demo = document.querySelector('#demo');

demo.setComponents([
  {
    name: 'LiapfIcons',
    tag: 'liapf-icons',
    description: 'Okalit Component: Icons for Liapf',
    import: () => import('./src/liapf-icons.js'),
    props: [
      { icon: { type: String, value: 'document' } },
      { color: { type: String, value: 'text' }},
      { size: { type: String, value: '90' }}
    ],
    slots: [],
    events: ['on:click'],
    channels: [],
  },
]);
