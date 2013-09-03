if (Meteor.isClient) {
      // Look for events from the order Template  
    Template.upload.events({
      // If the user clicks the element with an id of 'filepicker' run this function:
      'click #filePicker': function(){
      // Retrieves the order value to use later when saving the image URL
        var sessionVar = Session.get('order');
        // Set up inkpicker.io service
          (function(a){if(window.filepicker){return}var b=a.createElement("script");b.type="text/javascript";b.async=!0;b.src=("https:"===a.location.protocol?"https:":"http:")+"//api.filepicker.io/v1/filepicker.js";var c=a.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);var d={};d._queue=[];var e="pick,pickMultiple,pickAndStore,read,write,writeUrl,export,convert,store,storeUrl,remove,stat,setKey,constructWidget,makeDropPane".split(",");var f=function(a,b){return function(){b.push([a,arguments])}};for(var g=0;g<e.length;g++){d[e[g]]=f(e[g],d._queue)}window.filepicker=d})(document); 
        // Create API key for inkpicker variable
          var apiKey=('ARB7HKAKXSAK3nlXa9gMkz')
        //  Set API key for inkpicker
          filepicker.setKey(apiKey); 
        // Open up picker window & return saved image URL in an alert
          filepicker.pick(function(InkBlob){ 
            var ordersID =  Session.get('order');
             Orders.update({_id: ordersID},{$set: {imageURL: InkBlob.url}});
          })
          Router.go('thankyou');
          }
    }),

    Template.order.events({
      'submit form': function(e) {
          e.preventDefault();
          //declare a variable to pass to order
    var order = {
            // create JSON to be inserted into MogoDB with element grabed from form by [name=x]
            windowHeight: $(e.target).find('[name=windowHeight]').val(),
            windowWidth: $(e.target).find('[name=windowWidth]').val(),
            firstName: $(e.target).find('[name=firstName]').val(),
            secondName: $(e.target).find('[name=secondName]').val(),
            phoneNumber: $(e.target).find('[name=phoneNumber]').val(),
            emailAddress: $(e.target).find('[name=emailAddress]').val(),
            houseNo: $(e.target).find('[name=houseNo]').val(),
            secondName: $(e.target).find('[name=secondName]').val(),
            street: $(e.target).find('[name=street]').val(),
            address2: $(e.target).find('[name=address2]').val(),
            address3: $(e.target).find('[name=address3]').val(),
            town: $(e.target).find('[name=town]').val(),
            county: $(e.target).find('[name=county]').val(),
            postCode: $(e.target).find('[name=postCode]').val(),
            comments: $(e.target).find('[name=comments]').val(),
            }
        //alert(order);
          // post in orders collection
        orders = Orders.insert(order);
        Session.set('order', orders);
        var sessionSet = Session.get('order')
        Router.go('upload');
          // Re-direct to thank you page
         // END OF submit form function 
        }
     //End of Template order events
    });    


// End of Metor.is Client condition
}

