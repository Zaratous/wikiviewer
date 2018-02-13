 $(document).ready(function() {

    $("#search").on("click", function() { /*window.open('new_page.html', '_blank');*/var value = $("#searchTerm").val();
		$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&&generator=search&gsrsearch="+encodeURIComponent(value)+"&gsrnamespace=0&gsrlimit=10&prop=extracts&exchars=100&exlimit=max&explaintext=true&exintro=true&origin=*", function(json) {
			var  html="";
            var pages = json.query.pages;
              $.map(pages, function (page) {
                 html+="<a  target='_blank' class = 'articleLink well' href='http://en.wikipedia.org/wiki/"+encodeURIComponent(page.title)+"' title='"+page.extract+"'>"+"<h6>"+ page.title+"</h6>"+"</div><br>";
                   
              });
      
      
			$(".articles").html(html);
        

		});
    });
		
	$("#searchTerm").on('keyup', function (e) {
    if (e.keyCode == 13) {
       $("#search").click();
    }
});

   });