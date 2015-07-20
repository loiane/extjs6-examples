Ext.define('Blog.model.Contact', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest'
    ],

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'int' },
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' }
    ],

    proxy: {
        type: 'rest',
        url : '/contacts'
    }
});