const { override, fixBabelImports, addLessLoader } = require('customize-cra')


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#eb3238',
            //'@menu-dark-color': '#ffffff',
            '@menu-dark-bg': '#151a26',
            '@menu-dark-submenu-bg': '#151a26',
            '@layout-sider-background': '#151a26',
            '@layout-header-background': '#151a26',
        },
    }),
);

//235 50 55
//@layout-sider-background:
//@layout-header-background:
//@layout-trigger-background: 


//#141414;