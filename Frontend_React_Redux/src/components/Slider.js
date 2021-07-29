import React, { Component } from 'react'

import $ from 'jquery'
// import jQuery from 'jquery';

import '../style/custom/settings.css';
import '../style/custom/static-captions.css';
import '../style/custom/dynamic-captions.css';
import '../style/custom/captions.css';
import '../style/custom/slider.css';

// import '../style/custome/';

import '../style/Slider.css'

// import '../js/jquery.themepunch.tools.min.js'
// import '../js/jquery.themepunch.revolution.min.js'
// import '../js/'

import bannerSidebarMagic from '../images/banner-sidebar-magic-3-370x274.jpg'
import annerSidebarGw from '../images/banner-sidebar-gw-2-370x274.jpg'

export default class Slider extends Component {

    componentDidMount() {
        this.preparePlaceholderForSlider();
    }

    preparePlaceholderForSlider() {

        var setREVStartSize = function () {
            var tpopt = new Object();
            tpopt.startwidth = 960;
            tpopt.startheight = 421;
            // tpopt.container = jQuery('#rev_slider_1_1');
            tpopt.container = $('#rev_slider_1_1');
            tpopt.fullScreen = "off";
            tpopt.forceFullWidth = "off";

            tpopt.container.closest(".rev_slider_wrapper").css({ height: tpopt.container.height() }); tpopt.width = parseInt(tpopt.container.width(), 0); tpopt.height = parseInt(tpopt.container.height(), 0); tpopt.bw = tpopt.width / tpopt.startwidth; tpopt.bh = tpopt.height / tpopt.startheight; if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw; if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh; if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw; if (tpopt.bh > 1) { tpopt.bw = 1; tpopt.bh = 1 } if (tpopt.bw > 1) { tpopt.bw = 1; tpopt.bh = 1 } tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth)); if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight; if (tpopt.fullScreen == "on") { tpopt.height = tpopt.bw * tpopt.startheight; var cow = tpopt.container.parent().width(); var coh = $(window).height(); if (tpopt.fullScreenOffsetContainer != undefined) { try { var offcontainers = tpopt.fullScreenOffsetContainer.split(","); $.each(offcontainers, function (e, t) { coh = coh - $(t).outerHeight(true); if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight }) } catch (e) { } } tpopt.container.parent().height(coh); tpopt.container.height(coh); tpopt.container.closest(".rev_slider_wrapper").height(coh); tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh); tpopt.container.css({ height: "100%" }); tpopt.height = coh; } else { tpopt.container.height(tpopt.height); tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height); tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height); }
        };

        setREVStartSize();


        // var tpj = jQuery;
        var tpj = $;

        var revapi1;

        tpj(document).ready(function () {

            if (tpj('#rev_slider_1_1').revolution == undefined) ;
                // revslider_showDoubleJqueryError('#rev_slider_1_1');
            else
                revapi1 = tpj('#rev_slider_1_1').show().revolution(
                    {
                        dottedOverlay: "none",
                        delay: 3000,
                        startwidth: 960,
                        startheight: 421,
                        hideThumbs: 0,

                        thumbWidth: 100,
                        thumbHeight: 50,
                        thumbAmount: 2,

                        minHeight: 416,

                        simplifyAll: "off",

                        navigationType: "bullet",
                        navigationArrows: "solo",
                        navigationStyle: "round-old",

                        touchenabled: "on",
                        onHoverStop: "on",
                        nextSlideOnWindowFocus: "off",

                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: false,



                        keyboardNavigation: "off",

                        navigationHAlign: "center",
                        navigationVAlign: "bottom",
                        navigationHOffset: 0,
                        navigationVOffset: 20,

                        soloArrowLeftHalign: "left",
                        soloArrowLeftValign: "center",
                        soloArrowLeftHOffset: 20,
                        soloArrowLeftVOffset: 0,

                        soloArrowRightHalign: "right",
                        soloArrowRightValign: "center",
                        soloArrowRightHOffset: 20,
                        soloArrowRightVOffset: 0,

                        shadow: 0,
                        fullWidth: "on",
                        fullScreen: "off",

                        spinner: "spinner3",

                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,

                        shuffle: "off",

                        autoHeight: "off",
                        forceFullWidth: "off",



                        hideThumbsOnMobile: "off",
                        hideNavDelayOnMobile: 1500,
                        hideBulletsOnMobile: "off",
                        hideArrowsOnMobile: "off",
                        hideThumbsUnderResolution: 0,

                        hideSliderAtLimit: 993,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        startWithSlide: 0
                    });

            var camera_slider = $("#camera_wrap_22");
            // camera_slider.owlCarousel({
            //     slideSpeed: 300,
            //     lazyLoad: true,
            //     items: 1,
            //     autoPlay: 7000,
            //     stopOnHover: true,
            //     navigation: true,
            //     dots: false,
            //     navigationText: ['<i className="fa fa-angle-left"></i>', '<i className="fa fa-angle-right"></i>'],
            // });

            var camera_slider = $("#camera_wrap_23");

            // camera_slider.owlCarousel({
            //     slideSpeed: 300,
            //     lazyLoad: true,
            //     items: 1,
            //     autoPlay: 7000,
            //     stopOnHover: true,
            //     navigation: true,
            //     dots: false,
            //     navigationText: ['<i className="fa fa-angle-left"></i>', '<i className="fa fa-angle-right"></i>'],
            // });
        });

        var camera_slider = $("#camera_wrap_23");

        // camera_slider.owlCarousel({
        //     slideSpeed: 300,
        //     lazyLoad: true,
        //     items: 1,
        //     autoPlay: 7000,
        //     stopOnHover: true,
        //     navigation: true,
        //     dots: false,
        //     navigationText: ['<i className="fa fa-angle-left"></i>', '<i className="fa fa-angle-right"></i>'],
        // });

    }

    render() {
        return (
            <div className="row">
                <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-9">

                    <div className="row">
                        <div className="col-md-12">
                            {/* <!-- START REVOLUTION SLIDER  fullwidth mode --> */}

                            <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container">
                                <div id="rev_slider_1_1" className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive">
                                    <ul className="tp-revslider-mainul">

                                        {/* <!-- SLIDE  --> */}
                                        <li data-transition="random" data-slotamount="7" data-masterspeed="300" data-link="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon" data-saveperformance="off" className="tp-revslider-slidesli active-revslide">
                                            {/* <!-- MAIN IMAGE --> */}

                                            <div className="slotholder" data-duration="undefined"                   data-zoomstart="undefined" data-zoomend="undefined"     data-rotationstart="undefined" data-rotationend="undefined" data-ease="undefined"
                                                data-bgpositionend="undefined"
                                                data-bgposition="center top" data-kenburns="undefined"
                                                data-easeme="undefined" data-bgfit="cover"
                                                data-bgfitend="undefined" data-owidth="undefined"
                                                data-oheight="undefined">
                                                <div className="tp-bgimg defaultimg"
                                                    data-lazyload="undefined" data-bgfit="cover"
                                                    data-bgposition="center top"
                                                    data-bgrepeat="no-repeat" data-lazydone="undefined"
                                                    src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-PKM.jpg"
                                                    data-src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-PKM.jpg">
                                                </div>
                                            </div>
                                            {/* <!-- LAYERS --> */}

                                            <div className="tp-caption sft slidelink hasclicklistener" 
                                                data-x="center" data-y="center" data-linktoslide="no"
                                                data-start="0">
                                                    <a target="_self" href="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon">
                                                        <span>
                                                        </span>
                                                    </a>
                                            </div>
                                        </li>

                                        {/* <!-- SLIDE  --> */}
                                        <li data-transition="random" data-slotamount="7"
                                            data-masterspeed="300"
                                            data-link="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame"
                                            data-saveperformance="off"
                                            className="tp-revslider-slidesli active-revslide current-sr-slide-visible">
                                            {/* <!-- MAIN IMAGE --> */}
                                            <div className="slotholder" data-duration="undefined" data-zoomstart="undefined"
                                                data-zoomend="undefined" data-rotationstart="undefined"
                                                data-rotationend="undefined" data-ease="undefined"
                                                data-bgpositionend="undefined"
                                                data-bgposition="center top" data-kenburns="undefined"
                                                data-easeme="undefined" data-bgfit="cover"
                                                data-bgfitend="undefined" data-owidth="undefined"
                                                data-oheight="undefined">
                                                <div className="tp-bgimg defaultimg"
                                                    data-lazyload="undefined" data-bgfit="cover"
                                                    data-bgposition="center top"
                                                    data-bgrepeat="no-repeat" data-lazydone="undefined"
                                                    src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-DIGIMON-HOR.jpg"
                                                    data-src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-DIGIMON-HOR.jpg">
                                                </div>
                                            </div>
                                            {/* <!-- LAYERS --> */}
                                            <div className="tp-caption sft slidelink hasclicklistener"
                                                data-x="center" data-y="center" data-linktoslide="no"
                                                data-start="0">
                                                    <a target="_self"
                                                    href="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame">
                                                        <span>
                                                        </span></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="tp-bannertimer">
                                    </div>
                                    <div className="tp-loader spinner3" style={{display: 'none'}}>
                                        <div className="dot1"></div>
                                        <div className="dot2"></div>
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                </div>
                                <div className="tp-bullets  simplebullets round-old" >
                                    <div className="bullet first"></div>
                                    <div className="bullet last selected"></div>
                                    <div className="tpclear"></div>
                                </div>
                                <div style={{ position: 'absolute', top: '173px', marginTop: '-25px', left: '20px'}}
                                    className="tp-leftarrow  tparrows default round-old">
                                    <div className="tp-arr-allwrapper">
                                        <div className="tp-arr-iwrapper">
                                            <div className="tp-arr-imgholder"
                                                style={{ visibility: 'inherit', opacity: '1', backgroundImage: 'url(https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-PKM.jpg)'}}>
                                            </div>
                                            <div className="tp-arr-imgholder2"></div>
                                            <div className="tp-arr-titleholder"></div>
                                            <div className="tp-arr-subtitleholder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ position: 'absolute', top: '173px', marginTop: '-25px', right: '20px'}}
                                    className="tp-rightarrow  tparrows default round-old">
                                    <div className="tp-arr-allwrapper">
                                        <div className="tp-arr-iwrapper">
                                            <div className="tp-arr-imgholder"
                                                style={{visibility: 'inherit', opacity: '1', backgroundImage: 'url(https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-PKM.jpg)'}}>
                                            </div>
                                            <div className="tp-arr-imgholder2"></div>
                                            <div className="tp-arr-titleholder"></div>
                                            <div className="tp-arr-subtitleholder"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- START REVOLUTION SLIDER  fullwidth mode --> */}

                            <div id="rev_slider_2_2_wrapper"
                                className="rev_slider_wrapper fullwidthbanner-container">
                                <div id="rev_slider_2_2" className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive" >
                                    <ul className="tp-revslider-mainul" >
                                        {/* <!-- SLIDE  --> */}
                                        <li data-transition="random" data-slotamount="7"
                                            data-masterspeed="300"
                                            data-link="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon"
                                            data-saveperformance="off"
                                            className="tp-revslider-slidesli active-revslide current-sr-slide-visible" >
                                            {/* <!-- MAIN IMAGE --> */}
                                            <div className="slotholder" style={{width:'100%', height:'100%'}}
                                                data-duration="undefined" data-zoomstart="undefined"
                                                data-zoomend="undefined" data-rotationstart="undefined"
                                                data-rotationend="undefined" data-ease="undefined"
                                                data-bgpositionend="undefined"
                                                data-bgposition="center top" data-kenburns="undefined"
                                                data-easeme="undefined" data-bgfit="contain"
                                                data-bgfitend="undefined" data-owidth="undefined"
                                                data-oheight="undefined">
                                                <div className="tp-bgimg defaultimg"
                                                    data-lazyload="undefined" data-bgfit="contain"
                                                    data-bgposition="center top"
                                                    data-bgrepeat="no-repeat" data-lazydone="undefined"
                                                    src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-PKM.jpg"
                                                    data-src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-PKM.jpg" >
                                                </div>
                                            </div>
                                            {/* <!-- LAYERS --> */}
                                            <div className="tp-caption sft slidelink hasclicklistener" 
                                                data-x="center" data-y="center" data-linktoslide="no"
                                                data-start="0">
                                                    <a style={{width:'100%', height:'100%', display:'block'}}
                                                    target="_self"
                                                    href="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon">
                                                        <span
                                                        style={{width:'100%', height:'100%', display:'block'}}></span></a>
                                            </div>
                                        </li>
                                        {/* <!-- SLIDE  --> */}
                                        <li data-transition="random" data-slotamount="7"
                                            data-masterspeed="300"
                                            data-link="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame"
                                            data-saveperformance="off"
                                            className="tp-revslider-slidesli active-revslide" >
                                            {/* <!-- MAIN IMAGE --> */}
                                            <div className="slotholder" style={{width:'100%', height:'100%'}}
                                                data-duration="undefined" data-zoomstart="undefined"
                                                data-zoomend="undefined" data-rotationstart="undefined"
                                                data-rotationend="undefined" data-ease="undefined"
                                                data-bgpositionend="undefined"
                                                data-bgposition="center top" data-kenburns="undefined"
                                                data-easeme="undefined" data-bgfit="contain"
                                                data-bgfitend="undefined" data-owidth="undefined"
                                                data-oheight="undefined">
                                                <div className="tp-bgimg defaultimg"
                                                    data-lazyload="undefined" data-bgfit="contain"
                                                    data-bgposition="center top"
                                                    data-bgrepeat="no-repeat" data-lazydone="undefined"
                                                    src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-DIGIMON-VERT.jpg"
                                                    data-src="https://www.versusgamecenter.pt/image/catalog/revslider_media_folder/NOVIDADES-DIGIMON-VERT.jpg" >
                                                </div>
                                            </div>
                                            {/* <!-- LAYERS --> */}
                                            <div className="tp-caption sft slidelink hasclicklistener" 
                                                data-x="center" data-y="center" data-linktoslide="no"
                                                data-start="0"><a
                                                    style={{width:'100%', height: '100%', display:'block'}}
                                                    target="_self" href="https://www.versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame"><span
                                                    style={{width:'100%', height: '100%', display:'block'}}></span></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="tp-bannertimer">
                                    </div>
                                    <div className="tp-loader spinner0" style={{display: 'none'}}>
                                        <div className="dot1"></div>
                                        <div className="dot2"></div>
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                </div>

                                <div className="tp-bullets hidebullets simplebullets round-old"
                                    style={{ bottom: '5.71429px', left: '50%', marginLeft: '0px'}}>
                                    <div className="bullet first selected"></div>
                                    <div className="bullet last"></div>
                                    <div className="tpclear"></div>
                                </div>
                                <div style={{ position: 'absolute',  top: '25px',  marginTop: '-25px', left: '20px'}}
                                    className="tp-leftarrow hidearrows tparrows default round-old">
                                    <div className="tp-arr-allwrapper">
                                        <div className="tp-arr-iwrapper">
                                            <div className="tp-arr-imgholder">
                                            </div>
                                            <div className="tp-arr-imgholder2"></div>
                                            <div className="tp-arr-titleholder"></div>
                                            <div className="tp-arr-subtitleholder"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-rightarrow hidearrows tparrows default round-old">
                                    <div className="tp-arr-allwrapper">
                                        <div className="tp-arr-iwrapper">
                                            <div className="tp-arr-imgholder">
                                            </div>
                                            <div className="tp-arr-imgholder2"></div>
                                            <div className="tp-arr-titleholder"></div>
                                            <div className="tp-arr-subtitleholder"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END REVOLUTION SLIDER --> */}
                        </div>

                    </div>
                </div>

                <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3" id="column_left">
                    <div className="container" style={{width: 'auto !important'}}>
                        <div className="camera_slider">
                            <div className="camera_wrap" id="camera_wrap_22">
                                <a href="http://versusgamecenter.pt/novidades/novidades-magic-the-gathering">
                                    <img src={ bannerSidebarMagic } alt="Novidades Magic" style={{maxWidth: '100%'}}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{width: 'auto !important'}}>
                        <div className="camera_slider">
                            <div className="camera_wrap" id="camera_wrap_23">
                                <a href="http://versusgamecenter.pt/novidades/novidades-games-workshop">
                                    <img src={ annerSidebarGw } alt="Novidades Games Workshop" style={{maxWidth: '100%'}}>
                                    </img>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
