(function ($) {
  Drupal.behaviors.rewards = {
    attach: function (context, settings) {
      $(".select-reward").click(function() {
      	// Removes all selected items classes.
      	$(".rewards").each(function(){
      	  $(this).removeClass('select-reward selected');
          // Hides all other tick marks.
          $(this).parent().find(".icon-correct").css('display', 'none');
      	});
      	// Adds 'select-reward selected' class for the selected item.
      	$(this).addClass('select-reward selected');
        // Shows tick mark when user select reward.
        $(this).parent().find(".icon-correct").show();

        //set sku value to form field
        $(".form-reward-sku").val($(this).parents('.views-field-title').find('.reward-sku').text());
        $(".form-reward-belt").val($(this).parents('.views-field-title').find('.current-product-reward-belt').text());
      });
      var phone = Drupal.t("Phone ");
      var email = Drupal.t("Email ");
      var country = Drupal.t("Location/Region ");
      var zip = Drupal.t("Postal/Zip code ");

      //Help text added for phone field
      var phoneHelpText = Drupal.t("Please only enter numbers");
      var phoneField = $('#edit-field-shipment-address-und-0-phone');
      phoneField.attr('placeholder', phoneHelpText);

      //Add error span tag on name, phone, email fields
      $("label[for='edit-field-shipment-address-und-0-phone']").text(phone).append($('<span></span>').addClass('form-required')
                   .text('*'));
      $("label[for='edit-field-shipment-address-und-0-email']").text(email).append($('<span></span>').addClass('form-required')
                   .text('*'));
      $("label[for='edit-field-shipment-address-und-0-country']").text(country).append($('<span></span>').addClass('form-required')
                   .text('*'));
      $("label[for='edit-field-shipment-address-und-0-postal-code']").text(zip).append($('<span></span>').addClass('form-required')
                   .text('*'));

      // Redirects home page when user clicks on 'Share on Facebook' and
      //   'Share on Twitter' buttons from Rewards thank you page.
      $(".reward-share-icon").click(function(){
        // Retrieves base_url from Drupal.settings and reload the page with base_url
        window.location = Drupal.settings.intel_belt_rewards.base_url;
      });
    }
  };
})(jQuery);
;
(function($){Drupal.behaviors.social_block={attach:function(context,settings){var ctx=$("#block-social-block-social-block .block-content"),itemList=$(".item-list",ctx),items=$("li",ctx),origWidth=itemList.width(),newWidth=items.first().width()*items.length;if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}}$("#social-expander").toggle(function(event){$(this).addClass("js-expanded");itemList.animate({width:newWidth})},function(event){$(this).removeClass("js-expanded");itemList.animate({width:origWidth})});if(window._gaq){var pageTitle=$("<div></div>").text($("h1#page-title .limiter").clone().children().remove().end().text().trim()).html();$("li a.google-track-social",ctx).click(function(e){_gaq.push(["_trackSocial",$(this).attr("title"),$(this).data("social-action"),pageTitle])})}}}})(jQuery);;
