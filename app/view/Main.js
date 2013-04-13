Ext.define('knowledge-wallet.view.Main', {
	extend: 'Ext.carousel.Carousel',
    xtype: 'main',
    config: {
	    direction: 'horizontal',
	    directionLock: true,
	    items: [
	        {
	            html: ["Q1<br><br>",
	                   "Answer1"].join("")
	        },
	        {
	        	html: ["Q2<br><br>",
	                   "Answer2"].join("")
	        },
	        {
	        	html: ["Q3<br><br>",
	                   "Answer3"].join("")
	        },
	        {
	        	html: ["Q4<br><br>",
	                   "Answer4"].join("")
	        }
	    ]
    }
});
