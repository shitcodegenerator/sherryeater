window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Determine actual values based on your own requirements
if (localStorage.getItem('consentMode') === null) {
    gtag('consent', 'default', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted'
      });
} else {
    console.log(JSON.parse(localStorage.getItem('consentMode')))
    gtag('consent', 'defailt', JSON.parse(localStorage.getItem('consentMode')))
}

gtag('js', new Date());

gtag('config', 'G-M7D4W5N6L0');

