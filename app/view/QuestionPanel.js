Ext.define('knowledge-wallet.view.QuestionPanel', {
	extend: 'Ext.Panel',
	xtype: 'qpanel',
	config:{
		question: "",
		answer: "",
		qid: 0
	},
	fullscreen: true,
	initialize : function(){
		this.add({
			xtype: 'container',
			layout: 'vbox',
			width: '100%',
			height: '100%',
			items: [{
				flex: 2,
				html: this.getQuestion()
			},{
				flex: 2,
				html: this.getAnswer(),
				hidden: true
			},{
				flex: 1,
				//html: this.getAnswer()
				xtype: 'button',
				text: 'Show Answer',
				handler : this.onShowAnswerClick
			}]
		});
	},
	
	onShowAnswerClick: function(){
		this.parent.innerItems[1].show();
	}
});