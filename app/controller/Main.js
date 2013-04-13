Ext.define('knowledge-wallet.controller.Main', {
    extend: 'Ext.app.Controller',
    require: ['knowledge-wallet.store.QuestionAndAnswer',
              'knowledge-wallet.model.QuestionAndAnswer'],
    config: {
        refs: {
            nav: '#qapanel'
        }
    },

    init : function() {},
    
    launch : function() {
    	//initialize store - Need to make it JsonP
    	//Ext.create('knowledge-wallet.store.QuestionAndAnswer', {id:'qastore'});
    	//var store = Ext.getCmp('qastore');
    	//console.log(store);
    	var store = Ext.create("Ext.data.Store", {
    	    storeId: "qastore",
    	    model: "knowledge-wallet.model.QuestionAndAnswer",
    	    data : [
    	        {id: 1, question: "What time is it?", answer: "9 PM"},
    	        {id: 2, question: "Are you hungry?", answer: "Yes"},
    	        {id: 3, question: "How hungry?", answer: "Why do you ask?"}
    	    ]
    	});
    	
    	this.extractData(store);
    },
    
    addLogoutButton: function() {
        this.getNav().add({
            text: 'Logout'
        });
    },
    
    extractData : function(store){
    	var count = store.getData().length;
    	//console.log(store.getData().items);
    	//console.log(Ext.getCmp('qapanel'));
    	questions = [];
    	for (var i = 0; i < count; i++ ){
    		//console.log(store.getData().items[i].data);
    		item = store.getData().items[i].data;
    		questions.push({
                html: ["Q: "+item.question,
                       "<br>A: "+item.answer].join("")
            });
    	}
    	console.log(questions);
    	Ext.getCmp('qapanel').setItems(questions);
    }
});