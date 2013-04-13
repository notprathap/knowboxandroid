Ext.define('knowledge-wallet.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Knowledge Box'
                },

                html: [
                    "Your questions answered"
                ]
            },
            {
                title: 'How it works',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'How it works'
                    }
                ],
                html: [
                       "1. Install our bookmark in your browser<br>",
                       "2. Add questions and answers to a web page<br>",
                       "3. Refresh your memory using our app"
                   ].join("")
            }
        ]
    }
});
