'use strict';

$(function () {

    //get json data
    function getData(id) {
        $.getJSON('utils/config/data.json', function (json) {
            $('.details__info__added').text(json.detailed_info[id - 1].added);
            $('.details__info__age').text(json.detailed_info[id - 1].age);
            $('.details__info__status').text(json.detailed_info[id - 1].m_status);
            $('.details__info__job').text(json.detailed_info[id - 1].job);
            $('.details__info__education').text(json.detailed_info[id - 1].education);
        });
    }

    //show detailed info by clicking on cell
    $('.table__row').click(function () {
        $('table').css('width', '35%');
        $('.phone').hide();
        $('.email').hide();
        $('.skype').hide();
        $('.comment').hide();
        $('.table__title--phone').hide();
        $('.table__title--email').hide();
        $('.table__title--skype').hide();
        $('.table__title--comment').hide();
        $('.name__ext').css('display', 'flex');
        $(this).find('.arrow').show();
        $(this).siblings().find('.arrow').hide();
        $(this).css('background-color', 'lightblue');
        $(this).siblings().css('background-color', 'white');
        $('.details').css('display', 'flex');
        getData($(this).attr('id'));
    });

    //close details info by clicking close button
    $('.details__info__close').click(function () {
        $('table').css('width', '100%');
        $('.details').hide();
        $('.arrow').hide();
        $('.table__row').css('background-color', 'white');
        $('.name__ext').hide();
        $('.phone').show();
        $('.email').show();
        $('.skype').show();
        $('.comment').show();
        $('.table__title--phone').show();
        $('.table__title--email').show();
        $('.table__title--skype').show();
        $('.table__title--comment').show();
        $('.details__info__added').empty();
        $('.details__info__age').empty();
        $('.details__info__status').empty();
        $('.details__info__job').empty();
        $('.details__info__education').empty();
    });

});