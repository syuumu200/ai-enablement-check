import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import "vite/modulepreload-polyfill";
import "./index.css";

createInertiaApp({
  resolve: (name: string) => {
    const pages = import.meta.glob<{ default: any }>("./pages/**/*.vue", { eager: true });
    const page = pages[`./pages/${name}.vue`];
    if (!page) {
      throw new Error(`Page not found: ./${name}.vue`);
    }
    return page.default;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});