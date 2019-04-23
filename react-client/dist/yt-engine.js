function tplawesome(e,t)
{
    res=e;
    for(var n=0;n<t.length;n++)
        {
            res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})
        }
        return res
    if (t.length == 0) {
        return("Nothing found, please try again!")
    }
}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 5,
            channelId: "UCG0DHs8jP-7kYVH7sXj-G-Q"
            //playlistId: "PLtMgJ1jvAKDVQAQ2yHrDjy2jOx016015w"
       });
       
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("yt-item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("AIzaSyBC1A_nNbTIR8vjBNWFUojhsEyz3t69Z1o");
    gapi.client.load("youtube", "v3", function() {
    });
}