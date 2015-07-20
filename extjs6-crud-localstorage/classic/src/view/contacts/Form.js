Ext.define('Blog.view.contacts.Form', {
    extend: 'Ext.window.Window',

    xtype: 'contactsform',

    requires: [
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],

    layout: 'fit',
    width: 350,
    closable: false,
    modal: true,

    session: true,

    bind: {
        title: '{windowTitle}'
    },

    items: [
        {
            xtype: 'form',
            reference: 'contactsForm',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',

            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'left',
                combineErrors: true,
                msgTarget: 'side'
            },

            items: [
                {
                    xtype: 'textfield',
                    name: 'id',
                    fieldLabel: 'id',
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: 'Phone',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    allowBlank: false
                }
            ]
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    text: 'Save',
                    //glyph: Packt.util.Glyphs.getGlyph('save'),
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    text: 'Cancel',
                    //glyph: Packt.util.Glyphs.getGlyph('cancel'),
                    listeners: {
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]
});