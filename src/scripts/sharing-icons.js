const shareIcons = document.querySelectorAll('.share-link');
const ops = {
    host: 'https://israel-onco.de',
    title: 'Лечение онкологии в Израиле! Достижение максимально положительного эффекта при лечении любых форм рака',
    img: 'https://israel-onco.de/images/assuta.jpg',
};

const shareUrls = {
    vk: `http://vk.com/share.php?url=${encodeURIComponent(ops.host)}&title=${encodeURIComponent(ops.title)}&image=${encodeURIComponent(ops.img)}&utm_source=share2`,
    facebook: `https://www.facebook.com/sharer.php?src=sp&amp;u=${encodeURIComponent(ops.host)}&title=${encodeURIComponent(ops.title)}&utm_source=share2`,
    odnoklassniki: `https://connect.ok.ru/offer?url=${encodeURIComponent(ops.host)}&title=${encodeURIComponent(ops.title)}&utm_source=share2`,
    googlePlus: `https://plus.google.com/share?url=${encodeURIComponent(ops.host)}&utm_source=share2`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(ops.title)}&url=${encodeURIComponent(ops.host)}&utm_source=share2`,
};
        // odnoklassniki: function(purl, text) {
        //     url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        //     url += '&st.comments=' + encodeURIComponent(text);
        //     url += '&st._surl='    + encodeURIComponent(purl);
        //     openSharingWindow(url);
        // },
        // facebook: function(purl, ptitle, pimg, text) {
        //     url  = 'http://www.facebook.com/sharer.php?s=100';
        //     url += '&p[title]='     + encodeURIComponent(ptitle);
        //     url += '&p[summary]='   + encodeURIComponent(text);
        //     url += '&p[url]='       + encodeURIComponent(purl);
        //     url += '&p[images][0]=' + encodeURIComponent(pimg);
        //     Share.popup(url);
        // },
        // twitter: function(purl, ptitle) {
        //     url  = 'http://twitter.com/share?';
        //     url += 'text='      + encodeURIComponent(ptitle);
        //     url += '&url='      + encodeURIComponent(purl);
        //     url += '&counturl=' + encodeURIComponent(purl);
        //     Share.popup(url);
        // },
        // mailru: function(purl, ptitle, pimg, text) {
        //     url  = 'http://connect.mail.ru/share?';
        //     url += 'url='          + encodeURIComponent(purl);
        //     url += '&title='       + encodeURIComponent(ptitle);
        //     url += '&description=' + encodeURIComponent(text);
        //     url += '&imageurl='    + encodeURIComponent(pimg);
        //     Share.popup(url)
        // },

const openSharingWindow = (event) => {
    const width = window.innerWidth < 650 ? window.innerWidth : 650;
    const height = window.innerHeight < 530 ? window.innerHeight : 530;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const options = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;

    let url;

    switch (event.target.classList[1]) {
        case 'fa-vk':
            url = shareUrls.vk;
            break;

        case 'fa-facebook':
            url = shareUrls.facebook;
            break;

        case 'fa-odnoklassniki':
            url = shareUrls.odnoklassniki;
            break;

        case 'fa-google-plus':
            url = shareUrls.googlePlus;
            break;

        default:
            url = shareUrls.twitter;
            break;
    }

    return window.open(url, 'Sharing', options);
};

shareIcons.forEach(icon => icon.addEventListener('click', openSharingWindow));
