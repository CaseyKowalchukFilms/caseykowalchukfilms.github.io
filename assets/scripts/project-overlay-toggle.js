function popupContent(fileName) {
	// Read content from file
	$.get('/popup-content/' + fileName + '.html', function(fileContent) {
		var popupWindowHTML = `
			<section>
				<div id="project-overlay">
					<section id="exit-button">
						<a onclick="closePopup()" href="javascript:void(0);">X</a>
					</section>
		`;
		popupWindowHTML += fileContent;
		popupWindowHTML += `
				</div>
			</section>
		`;
		
		$('.popupContent').html(popupWindowHTML);
	});
}

function closePopup() {
	$('.popupContent').html('');
}

$(document).ready(function(){
	$('.popupTrigger').on('click',function(e) {
		e.preventDefault();
		var fileName = $(this).attr('popupContent');
		popupContent(fileName);
	});
});