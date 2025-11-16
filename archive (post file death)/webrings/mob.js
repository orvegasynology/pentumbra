// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¨ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://sugarforbrains.neocities.org/',
'https://sunnyday.neocities.org/',
'https://lamorte.neocities.org/',
'https://sabrin.party/',
'https://scouts-basement.neocities.org/',
'https://doqmeat.com/',
'https://radspeon.neocities.org/',
'https://ginkgophyta.neocities.org/',
'https://local98.nekoweb.org/',
'https://ohrade.neocities.org/',
'https://enit.neocities.org/',
'https://foreverliketh.is/',
'https://danppun.neocities.org/',
'https://jojjo.neocities.org/',
'https://crashtestdummy.neocities.org/',
'https://pinkvampyr.leprd.space/',
'https://unitesynchronization.neocities.org/',
'https://lopster.neocities.org/',
'https://caitsith.neocities.org/',
'https://neotomic.neocities.org/',
'https://jadziajan.neocities.org/',
'https://rainyshinydays.neocities.org/',
'https://angelgarden.neocities.org/',
'https://roboro.neocities.org/',
'https://yefreitor.com/',
'https://livingmachinations.neocities.org/',
'https://catgirlcassie.neocities.org/',
'https://betazz.neocities.org/',
'https://teethinvitro.neocities.org/',
'https://hidingspot.neocities.org/',
'https://manyface.neocities.org/',
'https://ephemeralstar.neocities.org/',
'https://venusinfoxfurs.neocities.org/',
'https://joal.neocities.org/',
'https://pentumbra.space/',
'https://mspaintdemon.neocities.org/',
'https://junocat1890.neocities.org/',
'https://saturnhedge.neocities.org/',
'https://windigone.nekoweb.org/',
'https://mossypawprints.neocities.org/',
'https://kopawz.neocities.org/',
'https://aestuarium.me/',
'https://latte-lavanda.neocities.org/',
'https://pinkfiremage.neocities.org/'
]; 

//the name of the ring
var ringName = 'Mobring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'mobring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://sugarforbrains.neocities.org/mobring/';

//should the widget include a random button?
var useRandom = false;

