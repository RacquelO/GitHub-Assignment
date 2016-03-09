	var meows = ["Cat", "Dog", "Lion", "Chicken", "Tiger", "Bear", "Elephant", "Pony"];

			function appendNewButton(meow) { 
	    		var a = $('<button>')
	   	    	a.addClass('meow');
	    		a.attr('data-name', meow);
	    		a.text(meow);
	    	$('#meowButtons').append(a);
			}
		
			function renderButtons(){ 
				for (var i = 0; i < meows.length; i++){
		    		appendNewButton(meows[i])
				}
			}
					renderButtons();


			$('#meowButtons').on('click', function(){

				var meow = $('#meowInput').val().trim();
					meows.push(meow);
		
					appendNewButton(meow);
			$('#meowInput').val("");

				return false;

			});
		
		$('.meow').on('click', function() {
			$('#meows').empty();
        	var meow = $(this).data('name');
        	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + meow + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
      

                console.log(queryURL);

                console.log(response)

                
                var results = response.data;
            

                for (var i = 0; i < results.length; i++) {

                    var meowDiv = $('<div>');

                    var p = $('<p>').text("Rating: " + results[i].rating);

                    var meowImage = $('<img>');
                    meowImage.attr('src', results[i].images.fixed_height.url);
					meowImage.attr('data-still', results[i].images.fixed_height_still.url);
					meowImage.attr('data-animate', results[i].images.fixed_height.url);
					meowImage.attr('data-state', 'animate');


                    meowDiv.append(p);
                    meowDiv.append(meowImage);

                    $('#meows').prepend(meowDiv);
                   
                }

            $('#meows').on('click', 'gif', function() {			
            	var state = $(this).attr('data-state');

				if (state == 'still') {
					$(this).attr('src', $(this).data('animate'));
					$(this).attr('data-state', 'animate');
				}else{
					$(this).attr('src', $(this).data('still'));
					$(this).attr('data-state', 'still');
				}
	
	
           
			});
		
		});
	});
