function eventrocket_duplicator( $ ) {
	var template;
	var datepicker;
	var dup_link;

	function prep_template() {
		if ( "object" === template ) return;
		$( "body" ).append( eventrocket_dup.dialog_template );

		template = $( "#eventrocket_duplication_dialog" );
		datepicker = template.find( "#duplicate_start" );
		datepicker.datepicker();
	}

	function show_dialog() {
		template.dialog( {
			modal:  true,
			hide:   true,
			title:  eventrocket_dup.dialog_title,
			height: "auto",
			width:  "auto"
		} );
	}

	function init_fields() {
		datepicker.datepicker( "option", "defaultDate", new Date( dup_link.data( "date" ) ) );
		template.find( "form" ).attr( "action", dup_link.attr( "href" ) );
	}

	function on_click() {
		dup_link = $( this );
		prep_template();
		show_dialog();
		init_fields();
		return false;
	}

	// Capture clicks on "duplicate event" links
	$( "a.eventrocket_duplicate" ).click( on_click );
}

// Ensure our prereqs are met before rolling into action
( function() {
	if ( "function" !== typeof jQuery ||
		 "object"   !== typeof jQuery.ui ||
		 "function" !== typeof jQuery.ui.dialog ||
		 "object"   !== typeof jQuery.ui.datepicker ||
		 "object"   !== typeof eventrocket_dup ) return;

	jQuery( document ).ready( eventrocket_duplicator );
} )();
