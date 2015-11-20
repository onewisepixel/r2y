Template.confirm.rendered = function() {
    var url = String(Session.get('url'));
    url = url.replace(/"/g, '');
    setTimeout(console.log("New url"),5000);
    console.log(url);
}

Template.confirm.events({
  
    'click #posDel' : function(){
        $('#delMod').modal('hide');
        $('#delMod').on('hidden.bs.modal', function (e) {
            setTimeout(function(){ Router.go('/');}, 1000);
            
        });
    },
    'click .accept' : function(){
        if($('.uName').val()!==""){
            $(".delete,.accept,.retake").hide();
        html2canvas($('.posIm'), {
            onrendered: function(canvas) {
                canvas.setAttribute("id", "canvas");
                document.body.appendChild(canvas);
            }
        });
        setTimeout(function(){ $('#accMod').modal('hide');}, 3000);
        $('#accMod').on('hidden.bs.modal', function (e) {
            setTimeout(function(){ Router.go('/share');}, 1000);
            
        });
            }else{
                $('#naMod').modal('show');
                return false;
                $('uName').focusin();
            }
    },
    'click #posRe' : function(){
        $('#reMod').modal('hide');
        $('#reMod').on('hidden.bs.modal', function (e) {
            setTimeout(function(){ Router.go('/capture');}, 1000);
            
        });
    }
});

Template.confirm.helpers({
    posters: function() {
        //return Posters.find();
        //return this.url;
        console.log(this.url);
    }
});
