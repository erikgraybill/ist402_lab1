//gets HelloWorld class from /src/HelloWorld.js and makes an element out of it
import { HelloWorld } from './src/HelloWorld.js';

window.customElements.define('hello-world', HelloWorld);
