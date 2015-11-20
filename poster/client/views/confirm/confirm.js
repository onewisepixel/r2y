Template.confirm.rendered = function() {
    var url = Session.get('imgUrl');
    console.log(url.relLink);
}

Template.confirm.helpers({
    link: function() { 
    var url = Session.get('imgUrl');
    return url.relLink;
    }
});

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
             height:515,
            width:365,
            onrendered: function(canvas) {
                canvas.setAttribute("id", "canvas");
                //canvas.setAttribute("height", 450);
                //canvas.setAttribute("width", 365);
                document.body.appendChild(canvas);
                Canvas2Image.saveAsPNG(canvas)
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

