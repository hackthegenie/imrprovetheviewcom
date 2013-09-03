Template.thankyou.helpers({
    order: function(){
        return Orders.findOne(Session.get('order'));
    }
    });