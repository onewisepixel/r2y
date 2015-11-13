Template.capture.events({
    'change .myFileInput' : function(event, template) {
        //var image = event.target.files;   
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function(err, fileObj) {
               //New doc with ID: fileObj._id and sent off the data upload using HTTP 
                console.log(file);
                console.log(fileObj);
            });
        });
    },
    'click #fakeTap' : function(event, template) {
        event.preventDefault();
        $('.myFileInput').trigger('click');   
    },
    'click .back' : function(){
        Router.go('/');
    }
});

Template.capture.helpers({
	images: function() {
		return Images.find();
	}
});

