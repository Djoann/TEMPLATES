$('#button-keyword-submit').click(function(){
        var html = '';
        printRecipeTile(recipes[index]);  
        $('#container').html(html);
        attachClick();
    });
});





function printRecipeTile(recipe){
        return  '<div class="item">'+
        '<article class="hrecipe recipe" data-id="'+recipe.id+'" data-toggle="modal" data-target="#myModal" itemtype="http://data-vocabulary.org/Recipe">'+
            '<div class="recipe-container">'+
                '<div class="recipe-img-container">'+
                    '<img src="'+recipe.urlPicture+'"  class="photo" alt="'+recipe.title+'">'+
                    //chefjerome.printer.image(recipe.urlPicture, '', '', 'photo', recipe.title , '', 'photo')+
                '</div>'+
                    
                    '<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
                    '</div>'+
                '<div class="recipe-title-container">'+
                    '<div class="popover-content" class="recipe-title-container">'+
                        '<h2 class="fn" type="submit" itemprop="name">'+recipe.title+'</h2>'+
                        '<span>'+
                            '<button class="btn"><i class="icon-heart"><a href=""></a></i></button>'+
                            '<button class="btn"><i class="icon-comment"></i></button>'+
                            '<button class="btn"><i class="icon-bookmark"></i></button>'+
                        '</span>'+ 
                    '</div>'+
                '</div>'+
            '</div>'+
        '</article>'+
      '</div>';
    }