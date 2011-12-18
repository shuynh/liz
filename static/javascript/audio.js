//binds audio samples to their own individual buttons

$(document).ready(function() {
      
    $("#jquery_jplayer_1").jPlayer({
      ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "media/demo.mp3"
          });
        },
        ended: function (event) {
          $(this);
        },
        supplied: "mp3"
      }).bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
      $(this).jPlayer("pauseOthers");
    });

    $("#jquery_jplayer_2").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "media/English_Commercial Demo.mp3"
        });
      },
      ended: function (event) {
        $(this);
      },
      cssSelectorAncestor:"#jp_interface_2",
      supplied: "mp3"
      }).bind($.jPlayer.event.play, function() { 
      $(this).jPlayer("pauseOthers");
    });
    
    $("#jquery_jplayer_3").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "media/English_Narration_Demo.mp3"
        });
      },
      ended: function (event) {
        $(this);
      },
      cssSelectorAncestor:"#jp_interface_3",
      supplied: "mp3"
      }).bind($.jPlayer.event.play, function() { 
      $(this).jPlayer("pauseOthers");
    });

    $("#jquery_jplayer_4").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "media/EnglishIVR.mp3"
        });
      },
      ended: function (event) {
        $(this);
      },
      cssSelectorAncestor:"#jp_interface_4",
      supplied: "mp3"
      }).bind($.jPlayer.event.play, function() { 
      $(this).jPlayer("pauseOthers");
    });

    $("#jquery_jplayer_5").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "media/FrenchNarration.mp3"
        });
      },
      ended: function (event) {
        $(this);
      },
      cssSelectorAncestor:"#jp_interface_5",
      supplied: "mp3"
      }).bind($.jPlayer.event.play, function() { 
      $(this).jPlayer("pauseOthers");
    });


    $("#jquery_jplayer_6").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "media/French_IVR.mp3"
        });
      },
      ended: function (event) {
        $(this);
      },
      cssSelectorAncestor:"#jp_interface_6",
      supplied: "mp3"
      }).bind($.jPlayer.event.play, function() { 
      $(this).jPlayer("pauseOthers");
    });


    $("#jquery_jplayer_7").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "media/demo.mp3"
        });
      },
      ended: function (event) {
        $(this);
      },
      cssSelectorAncestor:"#jp_interface_7",
      supplied: "mp3"
      }).bind($.jPlayer.event.play, function() { 
      $(this).jPlayer("pauseOthers");
    });



});
