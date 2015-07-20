Ext.define('Blog.model.Contact', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    entityName: 'Contact',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' }
    ],

    proxy: {
        type: 'localstorage',
        id  : 'sencha-contacts'
    }
});