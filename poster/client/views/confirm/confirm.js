Template.confirm.rendered = function() { 
    var dUrl = Session.get('imgUrl');
    //var url = Session.get('imgUrl');
    //console.log(url.relLink);
    //alert("Poster being created. Please Wait...");
    var loadedImage = $('img#userImage');
    loadedImage.load( function() {
        if(typeof dUrl !=='undefined'){
        $("#xIssimo").fadeOut("slow");
    }   
        
    } );
    var flWt = (window.innerWidth > 0) ? window.innerWidth : screen.width;;var flHt=screen.height;
            var myWt = flWt * 0.5;var myWtAnd = flWt * 0.8;
            //var mChk = mobilecheck();alert(mChk);
            //console.log(mChk);console.log(myWt);
    var isMobile; if (window.matchMedia) {isMobile = window.matchMedia('(max-device-width: 960px)').matches;} else {isMobile = screen.width <= 960;}
            if(isMobile==true){$('#userImage').width(myWt);}
    var isAndy; if (window.matchMedia) {isAndy = window.matchMedia('(max-device-width: 365px)').matches;} else {isAndy = screen.width <= 365;}
            if(isAndy==true){$('#userImage').width(myWtAnd);}
        
}
Template.registerHelper('isIOS',function(){
  return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
});

Template.registerHelper('isAndroid',function(){
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
});

Template.confirm.helpers({
    link: function() { 
    var url = Session.get('imgUrl');
    return url;
    },
    imgLoaded: function() {
        var ready = document.getElementById("userImage").complete;
        return ready;
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
            //insert iphone image css rotate stuff here
            var ioS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if(ioS==true){$('#xIssimo').show();$('#userImage').addClass('rotate90R');}
            html2canvas($('.posIm'), {
             height:515,
            width:365,
                logging:true,
            onrendered: function(canvas) {
                canvas.setAttribute("id", "canvas");
                var svdImg = Canvas2Image.convertToPNG(canvas);
                document.body.appendChild(svdImg);$(svdImg).attr('id','svdImg').hide();

                console.log(svdImg.src);
                savePoster(svdImg.src);
            }
        });
            $('#xIssimo').hide();
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

