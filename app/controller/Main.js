Ext.define('knowledge-wallet.controller.Main', {
    extend: 'Ext.app.Controller',
    require: ['knowledge-wallet.store.QuestionAndAnswer',
              'knowledge-wallet.model.QuestionAndAnswer',
              'knowledge-wallet.view.QuestionPanel'],
    config: {
        refs: {
            nav: '#qapanel'
        }
    },

    launch : function() {
    	//initialize store - Need to make it JsonP
    	var qastore = Ext.create('knowledge-wallet.store.QuestionAndAnswer');
    	qastore.load();
    	console.log(qastore);
//    	var store = Ext.create("Ext.data.Store", {
//    	    storeId: "qastore",
//    	    model: "knowledge-wallet.model.QuestionAndAnswer",
//    	    data : [
//    	        {id: 1, question: "What time is it?", answer: "9 PM"},
//    	        {id: 2, question: "Are you hungry?", answer: "Yes"},
//    	        {id: 3, question: "How hungry?", answer: "Why do you ask?"}
//    	    ]
//    	});
    	
    	this.extractData(qastore);
    },
    
    addLogoutButton: function() {
        this.getNav().add({
            text: 'Logout'
        });
    },
    
    extractData : function(store){
    	console.log(store.data);
    	var count = store.getData().length;
    	questions = [];
    	
    	for (var i = 0; i < count; i++ ){
    		item = store.getData().items[i].data;
    		
//    		qpanelContainer = Ext.create('knowledge-wallet.view.QuestionPanel',{
//    			question: item.question,
//    			answer: item.answer,
//    			qid: item.id
//    		});
//    		questions.push(qpanelContainer);
    		
    		questions.push({
                html: ["Q: "+item.question,
                       "<br>A: "+item.answer].join("")});
    	}
    	
    	Ext.getCmp('qapanel').setItems(questions);
    }
});