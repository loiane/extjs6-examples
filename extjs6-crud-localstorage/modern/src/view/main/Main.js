Ext.define('Blog.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'Blog.view.contacts.List',

        'Blog.view.main.MainController',
        'Blog.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Contacts',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
                xtype: 'contactslist'
            }]
        }
    ]
});
