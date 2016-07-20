var modals = {
};
jQuery(document).ready(function($) {
	window.dialogOpen = function(action) {
		$('#actionTitle').text(modals[action].title);
		$('#actionMsg').text(modals[action].msg);
		$('#actionLink').attr('href', modals[action].url);
		$('#actionModal').modal('show');
	};
});
