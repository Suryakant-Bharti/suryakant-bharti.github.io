pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';

        var logo = document.createElement('img');
        logo.src = '/images/icon.png';
        splash.appendChild(logo);
        logo.onload = function () {
            splash.style.display = 'block';
        };

        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);
        
        var tip=document.createElement('div');
        tip.id='progress-text';
        splash.appendChild(tip);

    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        //这里的2000和GameManager.js中的GameManager.initTime是一样的。
        setTimeout(function(){
            splash.parentElement.removeChild(splash);
        }, 2000);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #283538;',
            '}',

            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: #fff;',
            '}',

            '#application-splash {',
            '    position: absolute;',
            '    top: calc(50% - 80px);',
            '    width: 300px;',
            '    left: calc(50% - 130px);',
            '}',

            '#application-splash img {',
            '    width: 15%;',
            '    margin: 0 auto;',
            '    display: block;',
            '}',

            '#progress-bar-container {',
            '    margin: 10px auto 0 auto;',
            '    height: 8px;',
            '    width: 100%;',
            '    border-radius: 5px;',
            '    background-color: #f5f5f5;',
            '}',

            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    border-radius: 5px;',
            '    transition: width 0.5s;',
            '    background-color: #46ccaf;',
            '}',
            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        width: 240px;',
            '        left: calc(50% - 120px);',
            '    }',
            '}',
            '#progress-text{background-image: url(http://24haowan-cdn.shanyougame.com/PlayCanvas/loadingScreen/assets/images/text.png);height: 30px;width: 100px;margin: 0 auto;background-size: contain;background-repeat: no-repeat;margin-top: 10px;}'
            
        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();

    showSplash();
        
    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});