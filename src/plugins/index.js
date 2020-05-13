const requireComponent = require.context('./', true, /\.vue$/);

const install = (Vue) => {
  if (install.installed) return;
  install.installed;

  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName);
    const componentName = config.default.name;
    Vue.component(componentName, config.default || config);
  });

  Vue.directive('focus', {
    bind: function () {},
    inserted: function (el) {
      el.focus();
    }
  });
};

// 确保是正常环境
if (typeof window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  install
}
