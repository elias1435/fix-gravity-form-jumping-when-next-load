<script>
var gf_active_page = 0;
jQuery('.gform_page').addClass('active');

function setPage(current_page, form_id) {
setTimeout(function() {
jQuery('.gform_wrapper .gform_page').removeClass('active');
jQuery('.gform_wrapper #gform_page_'+form_id+'_'+current_page).addClass('animated fadeInUp active').delay(1000).addClass('active');
gf_active_page = current_page;
}, 100);
}

jQuery(document).bind('gform_page_loaded', function(event, form_id, current_page) {

if(gf_active_page != current_page) { 
setPage(current_page, form_id);
} else {
jQuery('.gform_wrapper #gform_page_'+form_id+'_'+current_page).addClass('active');
}
});
</script>
