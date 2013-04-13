/**
 * A Q&A model
 */
Ext.define('knowledge-wallet.model.QuestionAndAnswer', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id',  type: 'number' },
            { name: 'question',      type: 'string' },
            { name: 'answer',  type: 'string' }
        ]
    }
});
