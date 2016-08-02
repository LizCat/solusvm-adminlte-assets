var modals = {
};
jQuery(document).ready(function($) {
	window.dialogOpen = function(action) {
		$('#actionTitle').text(modals[action].title);
		$('#actionMsg').html(modals[action].msg);
		if (modals[action].url) {
			$('#actionLink').attr('href', modals[action].url);
		} else {
			$('#actionLink').attr('href', '#').on('click', modals[action].callback);
		}
		$('#actionModal').modal('show');
	};

	if ($('#floatdiv').length) {
		var title = $('#floatdiv span strong').text();
		var link = $('#floatdiv a').attr('href');
		var linktext = $('#floatdiv a').text();
		$('#loginAsAdmin h4').text(title);
		$('#loginAsAdmin a').attr('href', link).text(linktext);
		$('#loginAsAdmin').show();
		$('#floatdiv').hide().remove();
	}
});
