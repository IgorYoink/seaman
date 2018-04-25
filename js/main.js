$(document).ready(function(){




	/*  Hamburger Menu & Icon  */
	$('.hamburger').on('click', function(e){
		
		e.preventDefault();
		$(this).toggleClass('opned');
		$('header nav').toggleClass('active');
		
	});

	

	/*  Advanced search form & Icon  */
	$('#advanced_search_btn').on("click", function(e){
		e.preventDefault();

		var ads_box =$('.advanced_search');
		
		if(!ads_box.hasClass('advanced_displayed')){

			$(this).addClass('active');
			ads_box.stop().fadeIn(200).addClass('advanced_displayed');

		}else{

			$(this).removeClass('active');
			ads_box.stop().fadeOut(200).removeClass('advanced_displayed');

		}

	});

    /*  Minus / Plus */
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });
    
	/*  Tabs  */
	$(document).ready(function() {

		//Default Action Действия по умолчанию
		$(".tab_content").hide(); //Hide all content //Скрыть весь контент
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab //Активировать первую вкладку
		$(".tab_content:first").show(); //Show first tab content //Показать контент первой вкладки
		
		//On Click Event Событие по клику
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active"); //Remove any "active" class //Удалить класс "active"
			$(this).addClass("active"); //Add "active" class to selected tab //Добавить класс "active" выбранной вкладке
			$(".tab_content").hide(); //Hide all tab content //Скрыть контент вкладки
			var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content //Найти значение атрибута, чтобы определить активную вкладку + контент
			$(activeTab).fadeIn(); //Fade in the active content //Исчезновение активного контента
			return false;
		});

	});

});