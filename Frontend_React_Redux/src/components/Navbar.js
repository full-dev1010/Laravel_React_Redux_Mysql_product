import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';

// import Slider from './Slider'
import NavGrid from './NavGrid'
// import NavFooter from 'NavFooter'

import '../style/Navbar.css'
import PropTypes from 'prop-types';

import logoImg from '../img/custom/LOGO_VERSUS_ASSINATURAS-PRETO.png';
import iconVersusBw from '../img/custom/icon-versus-bw.png';
import { logout } from "../actions/authActions";

// import '../js/megamenu.js';

import '../style/Navbar.css';


class Navbar extends Component {

  componentDidMount() {
    this.loadMegamenu();
  }    
  onLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  loadMegamenu(){
    var active = false;
    var hover = false;
    var megamenuresponsive = false;
    var rtl = $('html').hasClass('rtl');
    $(document).ready(function() {
      if($(window).width() < 992) {
        megamenuresponsive = true;
      }
      
      $("ul.megamenu > li").each(function () {
        var i = 0;
        $(this).find(".mobile-enabled").each(function () {
          i++;
        });
            
        if(i == 0) {
          $(this).find(".open-menu").addClass("mobile-disabled");
        }
      });
      
      $("ul.megamenu li .sub-menu .content .hover-menu ul li").hover(function () {
        $(this).children("ul").addClass("active");
      },function () {
        $(this).children("ul").removeClass("active");
      });
      
      $('.close-categories').on('click', function () {
        $(this).parent().removeClass("active");
        $(this).next().animate({ height:"hide" },400);
        return false;
      });
      
      $('.open-categories').on('click', function () {
        $(".open-categories").parent().removeClass("active");
        $('.open-categories').next().next().animate({ height:"hide" },400);
        
        $(this).parent().addClass("active");
        $(this).next().next().animate({ height:"show" },400);
        return false;
      });
      
      $('.close-menu').on('click', function () {
        $(this).parent().removeClass("active");
        $(this).next().next().next().animate({ height:"hide" },400);
        return false;
      });
      
      $('.open-menu').on('click', function () {
        $("ul.megamenu > li").removeClass("active");
        $("ul.megamenu > li").find(".sub-menu").animate({ height:"hide" },400);
        
        $(this).parent().addClass("active");
        $(this).next().next().animate({ height:"show" },400);
        megamenuresponsive = true;
        return false;
      });
      
      $("ul.megamenu > li.click .content a").click(function () {
        window.location = $(this).attr('href');
      });
        
      $("ul.megamenu > li.hover").hover(function () {
        if(megamenuresponsive == false) {
          active = $(this);
          hover = true;
          $("ul.megamenu > li").removeClass("active");
          $(this).addClass("active");
          if($("#header.header2 #header-inner > .container").length > 0) {	
            if(!rtl){
                $(this).children(".sub-menu").css("right", "auto");	
                var $whatever        = $(this).children(".sub-menu");
                var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
                var $whatever2       = $("#header.header2 #header-inner > .container");
                var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
                if(ending_right2 > ending_right) {
                  $(this).children(".sub-menu").css("right", "0");
                }
            }else{
                $(this).children(".sub-menu").css("right", "auto");	
                $(this).children(".sub-menu").css("left", "auto");	
                var $whatever        = $(this).children(".sub-menu");
                var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
                var $whatever2       = $("#header.header2 #header-inner > .container");
                var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
                if(ending_right2 > ending_right) {
                    $(this).children(".sub-menu").css("left", "0");
                }  
            }
          } else {
            if(!rtl){
                $(this).children(".sub-menu").css("right", "auto");	
                var $whatever        = $(this).children(".sub-menu");
                var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
                var $whatever2       = $("ul.megamenu");
                var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
                if(ending_right2 > ending_right) {
                  $(this).children(".sub-menu").css("right", "0");
                }
            }else{
                $(this).children(".sub-menu").css("right", "auto");	
                $(this).children(".sub-menu").css("left", "auto");	
                var $whatever        = $(this).children(".sub-menu");
                var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
                var $whatever2       = $("ul.megamenu");
                var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
                if(ending_right2 > ending_right) {
                    $(this).children(".sub-menu").css("left", "0");
                }  
            }
          }
          var widthElement = $(this).children("a").outerWidth()/2;
          var marginElement = $(this).children("a").offset().left-$(this).find(".content").offset().left;
          $(this).find(".content > .arrow").css("left", marginElement+widthElement);
        } 
      },function () {
        if(megamenuresponsive == false) {
          var rel = $(this).attr("title");
          hover = false;
          if(rel == 'hover-intent') {
            var hoverintent = $(this);
            setTimeout(function (){
              if(hover == false) {
                $(hoverintent).removeClass("active");
              }
            }, 500);
          } else {
            $(this).removeClass("active");
          }
        }
      });
      
      $("ul.megamenu > li.click").click(function () {
        if($(this).removeClass("active") == true) { return false; }
        active = $(this);
        hover = true;
        $("ul.megamenu > li").removeClass("active");
        $(this).addClass("active");
        if($("#header.header2 #header-inner > .container").length > 0) {	
          if(!rtl){
              $(this).children(".sub-menu").css("right", "auto");	
              var $whatever        = $(this).children(".sub-menu");
              var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
              var $whatever2       = $("#header.header2 #header-inner > .container");
              var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
              if(ending_right2 > ending_right) {
                $(this).children(".sub-menu").css("right", "0");
              }
          }else{
              $(this).children(".sub-menu").css("right", "auto");	
              $(this).children(".sub-menu").css("left", "auto");	
              var $whatever        = $(this).children(".sub-menu");
              var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
              var $whatever2       = $("#header.header2 #header-inner > .container");
              var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
              if(ending_right2 > ending_right) {
                  $(this).children(".sub-menu").css("left", "0");
              }  
          }
        } else {
          if(!rtl){
              $(this).children(".sub-menu").css("right", "auto");	
              var $whatever        = $(this).children(".sub-menu");
              var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
              var $whatever2       = $("ul.megamenu");
              var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
              if(ending_right2 > ending_right) {
                $(this).children(".sub-menu").css("right", "0");
              }
          }else{
              $(this).children(".sub-menu").css("right", "auto");	
              $(this).children(".sub-menu").css("left", "auto");	
              var $whatever        = $(this).children(".sub-menu");
              var ending_right     = ($(window).width() - ( $('body').outerWidth() - $whatever.offset().left + $whatever.outerWidth()));
              var $whatever2       = $("ul.megamenu");
              var ending_right2    = ($(window).width() - ($('body').outerWidth() - $whatever2.offset().left + $whatever2.outerWidth()));
              if(ending_right2 > ending_right) {
                  $(this).children(".sub-menu").css("left", "0");
              }  
          }
        }
        var widthElement = $(this).children("a").outerWidth()/2;
        var marginElement = $(this).children("a").offset().left-$(this).find(".content").offset().left;
        $(this).find(".content > .arrow").css("left", marginElement+widthElement);
        return false;
      });
      
      $(".categories-image-right ul > li > a").hover(function () {
           $(this).closest('.categories-image-right').find('img').attr('src', $(this).attr('data-image'));
      },function(){
           var src = $(this).closest('.categories-image-right').attr('data-image');
           $(this).closest('.categories-image-right').find('img').attr('src', src);
      });
      
      $(".megaMenuToggle").click(function () {
        if($(this).removeClass("active") == true) {
          $(this).parent().find(".megamenu-wrapper").stop(true, true).animate({ height:"hide" },400);
        } else {
          $(this).parent().find(".megamenu-wrapper").stop(true, true).animate({ height:"toggle" },400);
          $(this).addClass("active");
        }
        return false;
      });
      
      $('html').on('click', function () {
        if(!( $(window).width() < 992)) {
          $("ul.megamenu > li.click").removeClass("active");
        }
      });
    });
    
    $(window).resize(function() {
      megamenuresponsive = false;
      
      if($(window).width() < 992) {
        megamenuresponsive = true;
      }
    });
    
  }

  render() {
    return (
      <nav className="navbar navbar-inverse bg-white navbar-expand-sm navbar-dark px-sm-5" style={{backgroundColor: 'white !important', border: 'none !important'}}>
              {/* {$('body').html()} */}
              <header id="header2" className="header1 header11 type12 fixed-header">
                <div id="header-inner">
                    <div className="container">
                        <div style={{position: 'relative'}}>
                            
                            <h1 className="logo">
                                <a href="https://versusgamecenter.pt/">
                                  {/* <img src={"/catalog/view/theme/porto/custom/images/icon-versus-bw.png"}
                                        title="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)"
                                        alt="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)" /> */}
                                  <img src={iconVersusBw}
                                        title="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)"
                                        alt="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)" />
                                </a>
                            </h1>

                            <div id="mini-cart" className="dropdown">
                                <div className="dropdown-toggle cart-head" data-toggle="dropdown">
                                    <i className="ion-android-cart"></i>
                                    <span className="cart-items" id="total_item_ajax"><span id="total_item">0</span></span>
                                </div>

                                <div className="dropdown-menu" id="cart_content">
                                    <div id="cart_content_ajax">
                                        <div className="dropdown-cart-content">
                                            <ul>
                                                <li className="empty">
                                                    Carrinho vazio! </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div id="megamenu_2372652" className="container-megamenu  horizontal">
                                <div className="megaMenuToggle">
                                    <div className="megamenuToogle-wrapper">
                                        <div className="megamenuToogle-pattern">
                                            <div className="container">
                                                <div><span></span><span></span><span></span></div>
                                                <i className="fa fa-navicon"></i>
                                                <span style={{position: 'relative', top: '-1px'}}>MENU</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="megamenu-wrapper">
                                    <div className="megamenu-pattern">
                                        <div className="container">
                                            <ul className="megamenu shift-up">
                                                <li className=" with-sub-menu hover">
                                                    <p className="close-menu"></p>
                                                    <p className="open-menu"></p>
                                                      <a href="index.php?route=product/category&amp;path=33" className="clearfix"><span><strong>Jogos de
                                                                Cartas</strong></span></a>
                                                    <div className="sub-menu" style={{width:'750px'}}>
                                                        <div className="content" style={{backgroundImage:'url(image/catalog/menu-images/menu-cards.jpg)', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat'}}>
                                                            <p className="arrow"></p>
                                                            <div className="row">
                                                                <div className="col-sm-9  mobile-enabled">
                                                                    <div className="row">
                                                                        <div className="col-sm-6 static-menu">
                                                                            <div className="menu">
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering';"
                                                                                            className="main-menu with-submenu">Magic:
                                                                                            The Gathering</a>
                                                                                        <div className="open-categories">
                                                                                        </div>
                                                                                        <div className="close-categories">
                                                                                        </div>
                                                                                        <ul>
                                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/adventures-in-the-forgotten-realms"
                                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/adventures-in-the-forgotten-realms';">Adventures
                                                                                                    in the Forgotten
                                                                                                    Realms</a></li>
                                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/modern-horizons-ii"
                                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/modern-horizons-ii';">Modern
                                                                                                    Horizons II</a></li>
                                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/strixhaven-school-of-mages"
                                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/strixhaven-school-of-mages';">Strixhaven:
                                                                                                    School of Mages</a>
                                                                                            </li>
                                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/time-spiral-remasterd"
                                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/time-spiral-remasterd';">Time
                                                                                                    Spiral Remasterd</a>
                                                                                            </li>
                                                                                            <li><a href="/magic-the-gathering&amp;filter=12"
                                                                                                    onClick="window.location = '/magic-the-gathering&amp;filter=12';">Baralhos
                                                                                                    Pré Construídos</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/dragon-super-ball-cardgame"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/dragon-super-ball-cardgame';"
                                                                                            className="main-menu ">Dragon
                                                                                            Ball Super Cardgame</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/keyforge"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/keyforge';"
                                                                                            className="main-menu ">KeyForge</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-6 static-menu">
                                                                            <div className="menu">
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon';"
                                                                                            className="main-menu ">Pokémon</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/yu-gi-oh"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/yu-gi-oh';"
                                                                                            className="main-menu ">Yu-Gi-Oh!</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame';"
                                                                                            className="main-menu ">Digimon
                                                                                            Cardgame</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=' with-sub-menu hover'>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='index.php?route=product/category&amp;path=45'
                                                        className='clearfix'><span><strong>Jogos de
                                                                Tabuleiro</strong></span></a>
                                                    <div className="sub-menu " style={{width: '375px'}}>
                                                        <div className="content"
                                                            style={{backgroundImage: 'url(image/catalog/menu-images/menu-board-games-3.jpg)',backgroundPosition: 'top right',backgroundRepeat: 'no-repeat'}}>
                                                            <p className="arrow"></p>
                                                            <div className="row">
                                                                <div className="col-sm-9  mobile-enabled">
                                                                    <div className="row">
                                                                        <div className="col-sm-12 static-menu">
                                                                            <div className="menu">
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/fantasy-flight-boardgames"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/fantasy-flight-boardgames';"
                                                                                            className="main-menu ">Fantasy
                                                                                            Flight</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/devir"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/devir';"
                                                                                            className="main-menu ">Devir</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/hasbro"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/hasbro';"
                                                                                            className="main-menu ">Hasbro</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/outras-editoras"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/outras-editoras';"
                                                                                            className="main-menu ">Outras
                                                                                            Editoras</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/mebo-boardgames"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/mebo-boardgames';"
                                                                                            className="main-menu ">MEBO</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=' with-sub-menu hover'>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='index.php?route=product/category&amp;path=25'
                                                        className='clearfix'><span><strong>Jogos de
                                                                Miniaturas</strong></span></a>
                                                    <div className="sub-menu " style={{width:'400px'}}>
                                                        <div className="content"
                                                            style={{backgroundImage:'url(image/catalog/menu-images/menu-miniatures.jpg)',backgroundPosition: 'top right',backgroundRepeat: 'no-repeat'}}>
                                                            <p className="arrow"></p>
                                                            <div className="row">
                                                                <div className="col-sm-9  mobile-enabled">
                                                                    <div className="row">
                                                                        <div className="col-sm-12 static-menu">
                                                                            <div className="menu">
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/warhammer-40000"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/warhammer-40000';"
                                                                                            className="main-menu ">Warhammer
                                                                                            40,000</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/age-of-sigmar"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/age-of-sigmar';"
                                                                                            className="main-menu ">Age Of
                                                                                            Sigmar</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/bloodbowl"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/bloodbowl';"
                                                                                            className="main-menu ">Blood
                                                                                            Bowl</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/star-wars-x-wing-2nd-edition"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/star-wars-x-wing-2nd-edition';"
                                                                                            className="main-menu ">Star
                                                                                            Wars: X-Wing 2nd Edition</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/star-wars-legion---category"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/star-wars-legion---category';"
                                                                                            className="main-menu ">Star Wars
                                                                                            Legion</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/infinity"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/infinity';"
                                                                                            className="main-menu ">Infinity</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/marvel-crisis-protocol"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/marvel-crisis-protocol';"
                                                                                            className="main-menu ">Marvel
                                                                                            Crisis Protocol</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/warcry"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/warcry';"
                                                                                            className="main-menu ">Warcry</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/necromunda"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/necromunda';"
                                                                                            className="main-menu ">Necromunda</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/middle-earth-strategy-battle-game"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/middle-earth-strategy-battle-game';"
                                                                                            className="main-menu ">Middle-earth
                                                                                            Strategy Battle Game</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/adeptus-titanicus-cat"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/adeptus-titanicus-cat';"
                                                                                            className="main-menu ">Adeptus
                                                                                            Titanicus</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/warlord-games"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/warlord-games';"
                                                                                            className="main-menu ">Warlord
                                                                                            Games</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=' with-sub-menu hover'>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='https://www.versusgamecenter.pt/acessorios-para-miniaturas/'
                                                        className='clearfix'><span><strong>Acessórios para jogos de
                                                                Miniaturas</strong></span></a>
                                                    <div className="sub-menu " style={{width:'600px'}}>
                                                        <div className="content"
                                                            style={{backgroundImage:'url(image/catalog/menu-images/menu-accessories.jpg)',backgroundPosition: 'top right',backgroundRepeat: 'no-repeat'}}>
                                                            <p className="arrow"></p>
                                                            <div className="row">
                                                                <div className="col-sm-4  mobile-enabled">
                                                                    <div className="row">
                                                                        <div className="col-sm-12 static-menu">
                                                                            <div className="menu">
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/vallejo"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/vallejo';"
                                                                                            className="main-menu ">Vallejo</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/the-army-painter"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/the-army-painter';"
                                                                                            className="main-menu ">The Army
                                                                                            Painter</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/ammo-by-mig-jimenez"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/ammo-by-mig-jimenez';"
                                                                                            className="main-menu ">AMMO by
                                                                                            Mig Jimenez</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/gamers-grass"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/gamers-grass';"
                                                                                            className="main-menu ">Gamers
                                                                                            Grass</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/tintas-e-pinceis"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/tintas-e-pinceis';"
                                                                                            className="main-menu ">Tintas e
                                                                                            Pincéis</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/livros-e-revistas"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/livros-e-revistas';"
                                                                                            className="main-menu ">Livros e
                                                                                            Revistas</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/ferramentas-e-outros-acessorios"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/ferramentas-e-outros-acessorios';"
                                                                                            className="main-menu ">Ferramentas
                                                                                            e Outros Acessórios</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=' with-sub-menu hover'>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='http://versusgamecenter.pt/acessorios-para-jogos-de-cartas'
                                                        className='clearfix'><span><strong>Acessórios para jogos de
                                                                cartas</strong></span></a>
                                                    <div className="sub-menu " style={{width:'700px'}}>
                                                        <div className="content"
                                                            style={{backgroundImage:'url(image/catalog/images/popup.jpg)', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat'}}>
                                                            <p className="arrow"></p>
                                                            <div className="row">
                                                                <div className="col-sm-9  mobile-enabled">
                                                                    <div className="row">
                                                                        <div className="col-sm-12 static-menu">
                                                                            <div className="menu">
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/capas-protetoras"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/capas-protetoras';"
                                                                                            className="main-menu ">Capas
                                                                                            protetoras</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/deck-boxes-e-caixas-de-transporte-para-cartas"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/deck-boxes-e-caixas-de-transporte-para-cartas';"
                                                                                            className="main-menu ">Deck
                                                                                            Boxes e caixas de transporte
                                                                                            para cartas</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dossiers-binders-e-paginas"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dossiers-binders-e-paginas';"
                                                                                            className="main-menu ">Dossiers,
                                                                                            Binders e Páginas</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/playmats"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/playmats';"
                                                                                            className="main-menu ">Playmats</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/cartas-outros"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/cartas-outros';"
                                                                                            className="main-menu ">Outros</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dados-cartas"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dados-cartas';"
                                                                                            className="main-menu ">Dados</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=''>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='http://www.versusgamecenter.pt/dungeons--dragons-rpgs/'
                                                        className='clearfix'><span><strong>Dungeons & Dragons e outros
                                                                RPGs</strong></span></a>
                                                </li>
                                                <li className=''>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='https://www.versusgamecenter.pt/merchandising/funko-pop'
                                                        className='clearfix'><span><strong>Funko Pop!</strong></span></a>
                                                </li>
                                                <li className=''>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='https://www.versusgamecenter.pt/schleich'
                                                        className='clearfix'><span><strong>Schleish</strong></span></a>
                                                </li>
                                                <li className=''>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='https://www.versusgamecenter.pt/gift-card'
                                                        className='clearfix'><span><strong>Versus Gift
                                                                Card</strong></span></a>
                                                </li>
                                                <li className=' with-sub-menu hover'>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a
                                                        href='https://versusgamecenter.pt/novidades'
                                                        className='clearfix'><span><strong>Novidades</strong></span></a>
                                                    <div className="sub-menu fullwidthmenu" style={{width:'100%'}}>
                                                        <div className="content">
                                                            <p className="arrow"></p>
                                                            <div className="row">
                                                                <div className="col-sm-4  mobile-enabled">
                                                                    <div className="row">
                                                                        <div className="col-sm-12 static-menu">
                                                                            <div className="menu">
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/novidades/novidades-magic-the-gathering"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/novidades/novidades-magic-the-gathering';"
                                                                                            className="main-menu ">Novidades
                                                                                            Magic the Gathering</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/novidades/novidades-games-workshop"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/novidades/novidades-games-workshop';"
                                                                                            className="main-menu ">Novidades
                                                                                            Games Workshop</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/novidades-star-wars"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/novidades-star-wars';"
                                                                                            className="main-menu ">Novidades
                                                                                            Star Wars</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/novidades-pokemon"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/novidades-pokemon';"
                                                                                            className="main-menu ">Novidades
                                                                                            Pókemon</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/novidades-digimon"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/novidades-digimon';"
                                                                                            className="main-menu ">Novidades
                                                                                            Digimon</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/novidades/outras-novidades"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/novidades/outras-novidades';"
                                                                                            className="main-menu ">Outras
                                                                                            Novidades</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=''>
                                                    <p className='close-menu'></p>
                                                    <p className='open-menu'></p><a href='https://versusgamecenter.pt/conta'
                                                        className='clearfix'><span><strong>Área de
                                                                Cliente</strong></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <script type="text/javascript">
                                    $(window).load(function () {
                                        var css_tpl = '<style type="text/css">';
                                        css_tpl += '#megamenu_2372652 ul.megamenu > li > .sub-menu > .content {';
                                        css_tpl += '-webkit-transition: all 200ms ease-out !important;';
                                        css_tpl += '-moz-transition: all 200ms ease-out !important;';
                                        css_tpl += '-o-transition: all 200ms ease-out !important;';
                                        css_tpl += '-ms-transition: all 200ms ease-out !important;';
                                        css_tpl += 'transition: all 200ms ease-out !important;';
                                        css_tpl += '}</style>'
                                        $("head").append(css_tpl);
                                    });
                                </script> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header id="header" className="header11">
                <div id="header-top" className="hidden-xs">
                    <div className="container">
                        <div className="header-left">
                            <div className="switcher-wrap">
                            </div>

                        </div>
                        <div className="header-right">
                            <ul className="top-links">
                                <li><a href="https://versusgamecenter.pt/conta">Minha Conta</a></li>
                                <li><a href="https://versusgamecenter.pt/carrinho">Carrinho de compras</a></li>
                                <li><a href="https://versusgamecenter.pt/checkout">Finalizar Compra</a></li>
                                <li>
                                    {this.props.isLoggedIn ? 
                                        <a onMouseDown={this.onLogout}>Logout</a> : 
                                        <Link to ={'/login'}>Login</Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="header-inner">
                    <div className="container">
                        <div className="header-left">
                            
                            <h1 className="logo">
                              <a href="https://versusgamecenter.pt/">
                                {/* <img src={"https://versusgamecenter.pt/image/catalog/LOGO_VERSUS_ASSINATURAS-PRETO.png"} title="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)" alt="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)" /> */}
                                <img src={logoImg} title="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)" alt="Versus Gamecenter (Puzzlematik, Lda - NIF 510876412)" />
                              </a>
                            </h1>
                        </div>

                        <div className="header-center">
                            <div className="searchform-popup">

                                <a className="search-toggle"><i className="fa fa-search"></i></a>
                                <div className="searchform search_form">
                                    <fieldset>
                                        <span className="text">
                                            <div id="search" className="input-group">
                                                <input type="text" name="search" className="input-block-level search-query" placeholder="Pesquisa..." required />
                                            </div>
                                        </span>
                                        <select name="category_id" className="cat">
                                            <option value="0">Todas Categorias</option>
                                            <option value="170">AMMO by Mig Jimenez</option>
                                            <option value="111">Dungeons &amp; Dragons e Outros RPGs</option>
                                            <option value="156">Gamers Grass</option>
                                            <option value="131">Gift Card</option>
                                            <option value="43">Merchandising</option>
                                            <option value="74">&nbsp;&nbsp;Acessórios</option>
                                            <option value="47">&nbsp;&nbsp;Funko Pop!</option>
                                            <option value="44">&nbsp;&nbsp;T-Shirts</option>
                                            <option value="157">Novidades</option>
                                            <option value="160">&nbsp;&nbsp;Novidades Games Workshop</option>
                                            <option value="159">&nbsp;&nbsp;Novidades Magic the Gathering</option>
                                            <option value="163">&nbsp;&nbsp;Outras Novidades</option>
                                            <option value="164">Novidades Digimon</option>
                                            <option value="161">Novidades Pókemon</option>
                                            <option value="162">Novidades Star Wars</option>
                                            <option value="150">Puzzles</option>
                                            <option value="145">Schleich</option>
                                            <option value="155">The Army Painter</option>
                                            <option value="45">Jogos de Tabuleiro</option>
                                            <option value="93">&nbsp;&nbsp;Devir</option>
                                            <option value="91">&nbsp;&nbsp;Fantasy Flight</option>
                                            <option value="94">&nbsp;&nbsp;Hasbro</option>
                                            <option value="132">&nbsp;&nbsp;MEBO</option>
                                            <option value="95">&nbsp;&nbsp;Outras Editoras</option>
                                            <option value="32">RPG</option>
                                            <option value="25">Miniaturas</option>
                                            <option value="112">&nbsp;&nbsp;Adeptus Titanicus</option>
                                            <option value="138">&nbsp;&nbsp;Aeronautica Imperialis</option>
                                            <option value="88">&nbsp;&nbsp;Age Of Sigmar</option>
                                            <option value="89">&nbsp;&nbsp;Blood Bowl</option>
                                            <option value="147">&nbsp;&nbsp;Blood Bowl 2020</option>
                                            <option value="169">&nbsp;&nbsp;Infinity</option>
                                            <option value="126">&nbsp;&nbsp;Marvel Crisis Protocol</option>
                                            <option value="127">&nbsp;&nbsp;Marvel Crisis Protocol</option>
                                            <option value="114">&nbsp;&nbsp;Middle-earth Strategy Battle Game</option>
                                            <option value="106">&nbsp;&nbsp;Necromunda</option>
                                            <option value="90">&nbsp;&nbsp;Outros Jogos</option>
                                            <option value="105">&nbsp;&nbsp;Star Wars Legion</option>
                                            <option value="113">&nbsp;&nbsp;Star Wars: X-Wing 2nd Edition</option>
                                            <option value="125">&nbsp;&nbsp;Warcry</option>
                                            <option value="86">&nbsp;&nbsp;Warhammer 40,000</option>
                                            <option value="151">&nbsp;&nbsp;Warhammer Underworlds</option>
                                            <option value="148">&nbsp;&nbsp;Warlord Games</option>
                                            <option value="18">&nbsp;&nbsp;Acessórios para Miniaturas</option>
                                            <option value="98">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ferramentas e Outros
                                                Acessórios</option>
                                            <option value="97">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Livros e Revistas</option>
                                            <option value="96">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tintas e Pincéis</option>
                                            <option value="154">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vallejo</option>
                                            <option value="33">Jogos de Cartas Coleccionáveis</option>
                                            <option value="104">&nbsp;&nbsp;A Game of Thrones LCG 2nd Edition</option>
                                            <option value="143">&nbsp;&nbsp;Digimon Cardgame</option>
                                            <option value="142">&nbsp;&nbsp;Digimon TCG</option>
                                            <option value="116">&nbsp;&nbsp;Dragon Ball Super Cardgame</option>
                                            <option value="152">&nbsp;&nbsp;Flesh &amp; Blood</option>
                                            <option value="117">&nbsp;&nbsp;KeyForge</option>
                                            <option value="78">&nbsp;&nbsp;Magic: The Gathering</option>
                                            <option value="172">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adventures in the
                                                Forgotten Realms</option>
                                            <option value="108">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Challenger Decks</option>
                                            <option value="144">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commander Legends</option>
                                            <option value="110">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Core Set 2019</option>
                                            <option value="140">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Double Masters</option>
                                            <option value="135">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ikoria Lair of Behemoths
                                            </option>
                                            <option value="136">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jumpstart</option>
                                            <option value="153">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kaldheim</option>
                                            <option value="137">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M21 Core Set</option>
                                            <option value="120">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modern Horizons</option>
                                            <option value="171">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modern Horizons II
                                            </option>
                                            <option value="167">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Strixhaven: School of
                                                Mages</option>
                                            <option value="130">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Theros Beyond Death
                                            </option>
                                            <option value="128">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throne of Eldraine
                                            </option>
                                            <option value="165">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Spiral Remasterd
                                            </option>
                                            <option value="141">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zendikar Rising</option>
                                            <option value="133">&nbsp;&nbsp;Pokémon</option>
                                            <option value="149">&nbsp;&nbsp;Vampire The Eternal Struggle</option>
                                            <option value="134">&nbsp;&nbsp;Yu-Gi-Oh!</option>
                                            <option value="66">&nbsp;&nbsp;Acessórios para jogos de cartas</option>
                                            <option value="67">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Capas protetoras</option>
                                            <option value="71">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados</option>
                                            <option value="68">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deck Boxes e caixas de
                                                transporte para cartas</option>
                                            <option value="69">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dossiers, Binders e Páginas
                                            </option>
                                            <option value="73">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outros</option>
                                            <option value="72">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Playmats</option>
                                        </select>
                                        <span className="button-wrap">
                                            <button className="btn button-search" title="Search" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </fieldset>
                                </div>
                            </div>
                            <a className="mobile-toggle"><i className="fa fa-user"></i></a>

                        </div>

                        <div className="header-right">
                            <div className="header-minicart">
                                <div className="header-contact">
                                    <i className="fa fa-phone"></i> (+351) 211973317
                                    <span className="separator">|</span>
                                    <a href="/contatos">CONTACTA-NOS</a>
                                </div>
                            </div>

                            
                            <div id="mini-cart" className="dropdown">
                                <div className="dropdown-toggle cart-head" data-toggle="dropdown">
                                    <i className="ion-android-cart"></i>
                                    <span className="cart-items" id="total_item_ajax"><span id="total_item">0</span></span>
                                </div>

                                <div className="dropdown-menu" id="cart_content">
                                    <div id="cart_content_ajax">
                                        <div className="dropdown-cart-content">
                                            <ul>
                                                <li className="empty">
                                                    Carrinho vazio! </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="megamenu_53050278" className="container-megamenu  horizontal">
                        <div className="megaMenuToggle">
                            <div className="megamenuToogle-wrapper">
                                <div className="megamenuToogle-pattern">
                                    <div className="container">
                                        <div><span></span><span></span><span></span></div>
                                        <i className="fa fa-navicon"></i> <span
                                            style={{position: 'relative', top: '-1px'}}>MENU</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="megamenu-wrapper">
                            <div className="megamenu-pattern">
                                <div className="container">
                                    <ul className="megamenu shift-up">
                                        <li className=' with-sub-menu hover'>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a
                                                href='index.php?route=product/category&amp;path=33'
                                                className='clearfix'><span><strong>Jogos de Cartas</strong></span></a>
                                            <div className="sub-menu " style={{width:'750px'}}>
                                                <div className="content"
                                                    style={{backgroundImage:'url(image/catalog/menu-images/menu-cards.jpg)', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat'}}>
                                                    <p className="arrow"></p>
                                                    <div className="row">
                                                        <div className="col-sm-9  mobile-enabled">
                                                            <div className="row">
                                                                <div className="col-sm-6 static-menu">
                                                                    <div className="menu">
                                                                        <ul>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering';"
                                                                                    className="main-menu with-submenu">Magic:
                                                                                    The Gathering</a>
                                                                                <div className="open-categories"></div>
                                                                                <div className="close-categories"></div>
                                                                                <ul>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/adventures-in-the-forgotten-realms"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/adventures-in-the-forgotten-realms';">Adventures
                                                                                            in the Forgotten Realms</a>
                                                                                    </li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/modern-horizons-ii"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/modern-horizons-ii';">Modern
                                                                                            Horizons II</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/strixhaven-school-of-mages"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/strixhaven-school-of-mages';">Strixhaven:
                                                                                            School of Mages</a></li>
                                                                                    <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/time-spiral-remasterd"
                                                                                            onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/magic-the-gathering/time-spiral-remasterd';">Time
                                                                                            Spiral Remasterd</a></li>
                                                                                    <li><a href="/magic-the-gathering&amp;filter=12"
                                                                                            onClick="window.location = '/magic-the-gathering&amp;filter=12';">Baralhos
                                                                                            Pré Construídos</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/dragon-super-ball-cardgame"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/dragon-super-ball-cardgame';"
                                                                                    className="main-menu ">Dragon Ball Super
                                                                                    Cardgame</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/keyforge"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/keyforge';"
                                                                                    className="main-menu ">KeyForge</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6 static-menu">
                                                                    <div className="menu">
                                                                        <ul>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/pokemon';"
                                                                                    className="main-menu ">Pokémon</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/yu-gi-oh"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/yu-gi-oh';"
                                                                                    className="main-menu ">Yu-Gi-Oh!</a>
                                                                            </li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/digimon-cardgame';"
                                                                                    className="main-menu ">Digimon
                                                                                    Cardgame</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=' with-sub-menu hover'>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a
                                                href='index.php?route=product/category&amp;path=45'
                                                className='clearfix'><span><strong>Jogos de Tabuleiro</strong></span></a>
                                            <div className="sub-menu " style={{width:'375px'}}>
                                                <div className="content"
                                                    style={{backgroundImage:'url(image/catalog/menu-images/menu-board-games-3.jpg)', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat'}}>
                                                    <p className="arrow"></p>
                                                    <div className="row">
                                                        <div className="col-sm-9  mobile-enabled">
                                                            <div className="row">
                                                                <div className="col-sm-12 static-menu">
                                                                    <div className="menu">
                                                                        <ul>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/fantasy-flight-boardgames"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/fantasy-flight-boardgames';"
                                                                                    className="main-menu ">Fantasy
                                                                                    Flight</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/devir"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/devir';"
                                                                                    className="main-menu ">Devir</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/hasbro"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/hasbro';"
                                                                                    className="main-menu ">Hasbro</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/outras-editoras"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/outras-editoras';"
                                                                                    className="main-menu ">Outras
                                                                                    Editoras</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-tabuleiro/mebo-boardgames"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-tabuleiro/mebo-boardgames';"
                                                                                    className="main-menu ">MEBO</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=' with-sub-menu hover'>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a
                                                href='index.php?route=product/category&amp;path=25'
                                                className='clearfix'><span><strong>Jogos de Miniaturas</strong></span></a>
                                            <div className="sub-menu " style={{width:'400px'}}>
                                                <div className="content"
                                                    style={{backgroundImage:'url(image/catalog/menu-images/menu-miniatures.jpg)', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat'}}>
                                                    <p className="arrow"></p>
                                                    <div className="row">
                                                        <div className="col-sm-9  mobile-enabled">
                                                            <div className="row">
                                                                <div className="col-sm-12 static-menu">
                                                                    <div className="menu">
                                                                        <ul>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/warhammer-40000"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/warhammer-40000';"
                                                                                    className="main-menu ">Warhammer
                                                                                    40,000</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/age-of-sigmar"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/age-of-sigmar';"
                                                                                    className="main-menu ">Age Of Sigmar</a>
                                                                            </li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/bloodbowl"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/bloodbowl';"
                                                                                    className="main-menu ">Blood Bowl</a>
                                                                            </li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/star-wars-x-wing-2nd-edition"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/star-wars-x-wing-2nd-edition';"
                                                                                    className="main-menu ">Star Wars: X-Wing
                                                                                    2nd Edition</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/star-wars-legion---category"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/star-wars-legion---category';"
                                                                                    className="main-menu ">Star Wars
                                                                                    Legion</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/infinity"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/infinity';"
                                                                                    className="main-menu ">Infinity</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/marvel-crisis-protocol"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/marvel-crisis-protocol';"
                                                                                    className="main-menu ">Marvel Crisis
                                                                                    Protocol</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/warcry"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/warcry';"
                                                                                    className="main-menu ">Warcry</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/necromunda"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/necromunda';"
                                                                                    className="main-menu ">Necromunda</a>
                                                                            </li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/middle-earth-strategy-battle-game"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/middle-earth-strategy-battle-game';"
                                                                                    className="main-menu ">Middle-earth
                                                                                    Strategy Battle Game</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/adeptus-titanicus-cat"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/adeptus-titanicus-cat';"
                                                                                    className="main-menu ">Adeptus
                                                                                    Titanicus</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/warlord-games"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/warlord-games';"
                                                                                    className="main-menu ">Warlord Games</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=' with-sub-menu hover'>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a
                                                href='https://www.versusgamecenter.pt/acessorios-para-miniaturas/'
                                                className='clearfix'><span><strong>Acessórios para jogos de
                                                        Miniaturas</strong></span></a>
                                            <div className="sub-menu " style={{width:'600px'}}>
                                                <div className="content"
                                                    style={{backgroundImage:'url(image/catalog/menu-images/menu-accessories.jpg)', backgroundPosition: 'top right', backgroundRepeat: 'no-repeat'}}>
                                                    <p className="arrow"></p>
                                                    <div className="row">
                                                        <div className="col-sm-4  mobile-enabled">
                                                            <div className="row">
                                                                <div className="col-sm-12 static-menu">
                                                                    <div className="menu">
                                                                        <ul>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/vallejo"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/vallejo';"
                                                                                    className="main-menu ">Vallejo</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/the-army-painter"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/the-army-painter';"
                                                                                    className="main-menu ">The Army
                                                                                    Painter</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/ammo-by-mig-jimenez"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/ammo-by-mig-jimenez';"
                                                                                    className="main-menu ">AMMO by Mig
                                                                                    Jimenez</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/gamers-grass"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/gamers-grass';"
                                                                                    className="main-menu ">Gamers Grass</a>
                                                                            </li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/tintas-e-pinceis"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/tintas-e-pinceis';"
                                                                                    className="main-menu ">Tintas e
                                                                                    Pincéis</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/livros-e-revistas"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/livros-e-revistas';"
                                                                                    className="main-menu ">Livros e
                                                                                    Revistas</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/ferramentas-e-outros-acessorios"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/miniaturas/acessorios-para-miniaturas/ferramentas-e-outros-acessorios';"
                                                                                    className="main-menu ">Ferramentas e
                                                                                    Outros Acessórios</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=' with-sub-menu hover'>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a
                                                href='http://versusgamecenter.pt/acessorios-para-jogos-de-cartas'
                                                className='clearfix'><span><strong>Acessórios para jogos de
                                                        cartas</strong></span></a>
                                            <div className="sub-menu " style={{width:'700px'}}>
                                                <div className="content"
                                                    style={{backgroundImage:'url(image/catalog/images/popup.jpg)', backgroundPosition: 'top left',backgroundRepeat: 'no-repeat'}}>
                                                    <p className="arrow"></p>
                                                    <div className="row">
                                                        <div className="col-sm-9  mobile-enabled">
                                                            <div className="row">
                                                                <div className="col-sm-12 static-menu">
                                                                    <div className="menu">
                                                                        <ul>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/capas-protetoras"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/capas-protetoras';"
                                                                                    className="main-menu ">Capas
                                                                                    protetoras</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/deck-boxes-e-caixas-de-transporte-para-cartas"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/deck-boxes-e-caixas-de-transporte-para-cartas';"
                                                                                    className="main-menu ">Deck Boxes e
                                                                                    caixas de transporte para cartas</a>
                                                                            </li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dossiers-binders-e-paginas"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dossiers-binders-e-paginas';"
                                                                                    className="main-menu ">Dossiers, Binders
                                                                                    e Páginas</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/playmats"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/playmats';"
                                                                                    className="main-menu ">Playmats</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/cartas-outros"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/cartas-outros';"
                                                                                    className="main-menu ">Outros</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dados-cartas"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/jogos-de-cartas-coleccionaveis/acessorios-para-jogos-de-cartas/dados-cartas';"
                                                                                    className="main-menu ">Dados</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a
                                                href='http://www.versusgamecenter.pt/dungeons--dragons-rpgs/'
                                                className='clearfix'><span><strong>Dungeons & Dragons e outros
                                                        RPGs</strong></span></a>
                                        </li>
                                        <li className=''>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a
                                                href='https://www.versusgamecenter.pt/merchandising/funko-pop'
                                                className='clearfix'><span><strong>Funko Pop!</strong></span></a>
                                        </li>
                                        <li className=''>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a href='https://www.versusgamecenter.pt/schleich'
                                                className='clearfix'><span><strong>Schleish</strong></span></a>
                                        </li>
                                        <li className=''>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a href='https://www.versusgamecenter.pt/gift-card'
                                                className='clearfix'><span><strong>Versus Gift Card</strong></span></a>
                                        </li>
                                        <li className=' with-sub-menu hover'>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a href='https://versusgamecenter.pt/novidades'
                                                className='clearfix'><span><strong>Novidades</strong></span></a>
                                            <div className="sub-menu fullwidthmenu" style={{width:'100%'}}>
                                                <div className="content">
                                                    <p className="arrow"></p>
                                                    <div className="row">
                                                        <div className="col-sm-4  mobile-enabled">
                                                            <div className="row">
                                                                <div className="col-sm-12 static-menu">
                                                                    <div className="menu">
                                                                        <ul>
                                                                            <li><a href="https://versusgamecenter.pt/novidades/novidades-magic-the-gathering"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/novidades/novidades-magic-the-gathering';"
                                                                                    className="main-menu ">Novidades Magic
                                                                                    the Gathering</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/novidades/novidades-games-workshop"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/novidades/novidades-games-workshop';"
                                                                                    className="main-menu ">Novidades Games
                                                                                    Workshop</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/novidades-star-wars"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/novidades-star-wars';"
                                                                                    className="main-menu ">Novidades Star
                                                                                    Wars</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/novidades-pokemon"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/novidades-pokemon';"
                                                                                    className="main-menu ">Novidades
                                                                                    Pókemon</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/novidades-digimon"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/novidades-digimon';"
                                                                                    className="main-menu ">Novidades
                                                                                    Digimon</a></li>
                                                                            <li><a href="https://versusgamecenter.pt/novidades/outras-novidades"
                                                                                    onClick="window.location = 'https://versusgamecenter.pt/novidades/outras-novidades';"
                                                                                    className="main-menu ">Outras
                                                                                    Novidades</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=''>
                                            <p className='close-menu'></p>
                                            <p className='open-menu'></p><a href='https://versusgamecenter.pt/conta'
                                                className='clearfix'><span><strong>Área de Cliente</strong></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <script type="text/javascript">
                            $(window).load(function () {
                                var css_tpl = '<style type="text/css">';
                                css_tpl += '#megamenu_53050278 ul.megamenu > li > .sub-menu > .content {';
                                css_tpl += '-webkit-transition: all 200ms ease-out !important;';
                                css_tpl += '-moz-transition: all 200ms ease-out !important;';
                                css_tpl += '-o-transition: all 200ms ease-out !important;';
                                css_tpl += '-ms-transition: all 200ms ease-out !important;';
                                css_tpl += 'transition: all 200ms ease-out !important;';
                                css_tpl += '}</style>'
                                $("head").append(css_tpl);
                            });
                        </script> */}
                    </div>
                </div>
            </header>

          <div className="container">
            {/* <Slider/> */}
          </div>


          {/* <div className="container-fluid">
            <div className="navbar-header">
              <Link to = {"/"} className="navbar-brand">Store</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active nav-item ml-5"><Link to={"/"}>Home</Link></li>
            <li className="dropdown nav-item ml-5">
              <Link  to={"#"} className="dropdown-toggle" data-toggle = "dropdown">Categories <span className="caret"></span></Link>
                <ul className="dropdown-menu">
                  <li><Link to={"/brand/apple"}>Apple</Link></li>
                  <li><Link to={"/brand/google"}>Google</Link></li>
                  <li><Link to={"/brand/samsung"}>Samsung</Link></li>
                  <li><Link to={"/brand/htc"}>HTC</Link></li>
                  <li className="divider"></li>
                  <li><Link to={"/"}>All Categories</Link></li>
                </ul>
            </li>
            
          </ul>
          <ul className="nav navbar-nav navbar-right">
          <li className="nav-item ml-5">
            <Link to={"/cart"} className="ml-auto"><span className="badge pull-right">{this.props.productNumber}</span>
                  <i className="glyphicon glyphicon-shopping-cart"></i></Link></li>            
          </ul>
        </div> */}

      </nav>
    )
  }
}

Navbar.propTypes = {
  productNumber: PropTypes.number,
  isAuthenticated: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func
};

const mapStateToProps = state =>{
  return ({
    productNumber: state.products.cart.length,
    isAuthenticated: state.auth.isAuthenticated,
    isLoggedIn: state.auth.isLoggedIn
  });
}

export default connect(mapStateToProps, { logout } )(Navbar);
