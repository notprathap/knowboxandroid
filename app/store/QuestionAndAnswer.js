/**
 * The Q&A store. 
 */
Ext.define('knowledge-wallet.store.QuestionAndAnswer', {
    extend  : 'Ext.data.Store',
    config: {
        model: 'knowledge-wallet.model.QuestionAndAnswer',

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8000/qaitems/'
        },

        autoLoad: true
    }
});
