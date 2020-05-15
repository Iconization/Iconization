onbeforeunload = e => scrollTo(0, 0)

onload = e => {
  iw = innerWidth
  ih = innerHeight
/*
  ondblclick = e => {
    if (innerHeight != screen.height) {
      document.getElementsByTagName("html")[0].requestFullscreen()
      iw = screen.width
      ih = screen.height
      css_js()
    }
  }
*//*
  onresize = e => {
    iw = innerWidth
    ih = innerHeight
    css_js()
  }
*/
  ls = pageYOffset
  onscroll = e => {
    if (doc.style.display == 'none' || ls < pageYOffset || pageYOffset == 0) {
      scrollarr.style.visibility = 'hidden'
    } else if (ls > pageYOffset) {
      scrollarr.style.visibility = 'visible'
    }
    ls = pageYOffset
  }

  function css_js() {
    document.getElementsByClassName('chooseslide')[0].checked = true
    document.getElementsByClassName('chooseslide')[1].checked = document.getElementsByClassName('chooseslide')[2].checked = document.getElementsByClassName('chooseslide')[3].checked = document.getElementsByClassName('chooseslide')[4].checked = false

    document.getElementsByClassName('slides')[0].style.height = iw / 2 + 'px'
    document.getElementsByClassName('slides')[1].style.height = iw / 2 + 'px'
    document.getElementsByClassName('slides')[2].style.height = iw / 2 + 'px'
    document.getElementsByClassName('slides')[3].style.height = iw / 2 + 'px'
    document.getElementsByClassName('slides')[4].style.height = iw / 2 + 'px'

    slideblur.setAttribute('style', 'background:linear-gradient(#0000 70%,#fffc,#fff);position:relative;left:0px;bottom:0px;width:100%;height:50vw;z-index:1')
    slidebuttons.setAttribute('style', 'z-index:1;position:relative;width:25vw;left:' + (iw * .8 - iw / 4) / 2 + 'px;bottom:4vh')
    logo.setAttribute('style', 'position:absolute;cursor:pointer;z-index:1;width:100vw;top:' + (ih / 5.8 - iw / 12.5) + 'px') //height:iw/9.4px
    menu.style.top = menubtn.getBoundingClientRect().top + iw * .04 + 'px'
    menu.style.visibility = 'hidden'
    doc.innerHTML = doc.
    innerHTML.replace(/iconization/g, '<span style=color:red>i</span>con<span style=color:red>i</span>zat<span style=color:red>i</span>on')
    bground.style.height = document.getElementsByTagName('html')[0].getBoundingClientRect().height + 'px'
    doc.style.display = 'none'
  }
  css_js()


  function slidesBtns() {
    var st0, st1, st2, st3, st4;
    cs = document.getElementsByClassName("chooseslide");
    sw = slideswrapper
    cs[0].onclick = e => {
      sw.style.marginLeft = '0%';
      clearTimeout(st0);
      clearTimeout(st1);
      clearTimeout(st2);
      clearTimeout(st3);
      clearTimeout(st4);
      sr0();
    }
    cs[1].onclick = e => {
      sw.style.marginLeft = '-100%';
      clearTimeout(st0);
      clearTimeout(st1);
      clearTimeout(st2);
      clearTimeout(st3);
      clearTimeout(st4);
      sr1();
    }
    cs[2].onclick = e => {
      sw.style.marginLeft = '-200%';
      clearTimeout(st0);
      clearTimeout(st1);
      clearTimeout(st2);
      clearTimeout(st3);
      clearTimeout(st4);
      sr2();
    }
    cs[3].onclick = e => {
      sw.style.marginLeft = '-300%';
      clearTimeout(st0);
      clearTimeout(st1);
      clearTimeout(st2);
      clearTimeout(st3);
      clearTimeout(st4);
      sr3();
    }
    cs[4].onclick = e => {
      sw.style.marginLeft = '-400%';
      clearTimeout(st0);
      clearTimeout(st1);
      clearTimeout(st2);
      clearTimeout(st3);
      clearTimeout(st4);
      sr4();
    }

    function sr0() {
      st0 = setTimeout(function() {
        sw.style.marginLeft = '-100%';
        cs[1].checked = 1;
        sr1();
      }, 3e3);
    }
    sr0();

    function sr1() {
      st1 = setTimeout(function() {
        sw.style.marginLeft = '-200%';
        cs[2].checked = 1;
        sr2();
      }, 3e3);
    }

    function sr2() {
      st2 = setTimeout(function() {
        sw.style.marginLeft = '-300%';
        cs[3].checked = 1;
        sr3();
      }, 3e3);
    }

    function sr3() {
      st3 = setTimeout(function() {
        sw.style.marginLeft = '-400%';
        cs[0].checked = 1;
        sr0();
        setTimeout(function() {
          slideswrapper.style.transition = 'all 0s';
          sw.style.marginLeft = '0%';
          setTimeout(function() {
            slideswrapper.style.transition = 'all 1s';
          }, 1e3);
        }, 1e3);
      }, 3e3);
    }
  }
  slidesBtns()


  onclick = e => {
    if (e.target.id.includes('SB_')) scrollBy({
      top: eval('ST_' + e.target.id[3]).getBoundingClientRect().top,
      behavior: 'smooth'
    })
    if (e.target.id == 'SC_0' && prompt('Enter password: ') == 'iconX') sc_0.style.visibility = 'visible'
    if (e.target.id == 'SC_1' && prompt('Enter password: ') == 'iconX') sc_1.style.visibility = 'visible'
    if (e.target.id.includes('SB_') && doc.style.display == 'none') {
      docbtn.click()
      e.target.click()
    }
    if (e.target.id == 'logo') SB_5.click(), SB_5.click()
    if (e.target.id == 'scrollarr') scrollBy({
      top: news.getBoundingClientRect().top,
      behavior: 'smooth'
    })
    if (e.target.id != 'menubtn' && menu.style.visibility == 'visible' && (e.pageX < menu.offsetLeft || e.pageY < menu.offsetTop || e.pageX > menu.offsetLeft + menu.getBoundingClientRect().width || e.pageY > menu.offsetTop + menu.getBoundingClientRect().height)) menu.style.visibility = 'hidden'
    if (e.target.id == 'menubtn') {
      menu.style.visibility == 'visible' ? menu.style.visibility = 'hidden' : menu.style.visibility = 'visible'
    }
    if (e.target.id == 'docbtn') {
      if (doc.style.display == 'none') {
        docbtn.src = 'https://i.ibb.co/fNqd2Yh/Hide-article.png'
        doc.style.display = ''
        doccont.style.height = '100%'
        bground.style.height = document.body.getBoundingClientRect().height + 200 + 'px'
        bground.style.background = 'linear-gradient(#fff,#fff0)'
      } else {
        docbtn.src = 'https://i.ibb.co/z571mCS/full-article.png'
        doc.style.display = 'none'
        doccont.style.height = 0
        bground.style.height = document.body.getBoundingClientRect().height + 200 + 'px'
        bground.style.background = '#fff'
      }
      bground.style.height = document.getElementsByTagName('html')[0].getBoundingClientRect().height + 'px'
    }
    if (e.target.id == 'phoneIco') {
      phone.style.visibility == 'visible' ? phone.style.visibility = 'hidden' : phone.style.visibility = 'visible'
    }
    if (e.target.id == 'emailIco') {
      email.style.visibility == 'visible' ? email.style.visibility = 'hidden' : email.style.visibility = 'visible'
    }
  }
}
