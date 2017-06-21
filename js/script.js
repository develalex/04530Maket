$(function(){
    $('#messageAccordion').accordion({
        heightStyle:"content"
    });
    $('#tabIntroduction').click(tabIntroClick);
    $('#tabAbout').click(tabAboutClick);
    $('#tabFeatures').click(tabFeaturesClick);
      
    
});
function clearActiveTab(){
        $('.--tab').removeClass('--tabActive');
        $('.--tbCont').css('display','none');
        
    }
function tabAboutClick(){
    clearActiveTab();
    $('#tabAbout').addClass('--tabActive');
    $('#AboutContent').css('display','block');
    
    };
 
function tabIntroClick(){
    clearActiveTab();
    $('#tabIntroduction').addClass('--tabActive');
    $('#IntroContent').css('display','block');
};
function tabFeaturesClick(){
    clearActiveTab();
    $('#tabFeatures').addClass('--tabActive');
    $('#FeaturesContent').css('display','block');
};