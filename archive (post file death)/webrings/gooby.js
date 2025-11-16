// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://goooby.neocities.org/',
'https://boothworldindustries.neocities.org/',
'https://foggybear42.neocities.org/',
'https://neeet.neocities.org',
'https://boatemhq.neocities.org/',
'https://whirlwind.neocities.org/',
'https://monsieurdoll.neocities.org/',
'https://punkwasp.neocities.org/',
'https://sunnyday.neocities.org/',
'https://criticalhit.neocities.org/',
'https://lovelyqats.neocities.org/',
'https://beetlebug.neocities.org',
'https://scrapes-and-bruises.neocities.org/',
'https://transbro.neocities.org/',
'https://goofysillygoober.neocities.org/',
'https://natmsearch.neocities.org/',
'https://haunted-daddy.neocities.org/',
'https://meowlimit.neocities.org/',
'https://corvidae.digital/',
'https://prophetesque.gay/',
'https://murderscene.neocities.org/',
'https://1dkreally.neocities.org/',
'https://dogspit.nekoweb.org/',
'https://caesthoffe.neocities.org/',
'https://oliscrabwife.neocities.org/',
'https://clowdywings.neocities.org/',
'https://troy-sucks.neocities.org/',
'https://catbotanic.neocities.org/',
'https://gammagoop.neocities.org/',
'https://jackdoesntsmileback.neocities.org/',
'https://fawkess.neocities.org/',
'https://mism4tchedsocks.neocities.org/',
'https://funnyorangecat.neocities.org/',
'https://haetae.pages.gay/',
'https://jirachtic.neocities.org/',
'https://soapdooggss.neocities.org/',
'https://adonisnightingale.neocities.org/',
'https://discwire.neocities.org/',
'https://pysgodyn3.neocities.org/',
'https://circat.neocities.org/',
'https://heavenlyfebuary.neocities.org/',
'https://tissue.neocities.org/',
'https://thievery.neocities.org/',
'https://miniwildpanda.neocities.org',
'https://herebedraconity.neocities.org/',
'https://cybr.gay/',
'https://acidicalchemist.neocities.org/',
'https://digitaldaydreams.neocities.org/',
'https://kitnomaly.neocities.org/',
'https://wallgof.neocities.org/',
'https://spycicl.neocities.org/',
'https://wriorango.neocities.org/',
'https://koyanthrope.neocities.org/',
'https://ender-the-phantom.neocities.org',
'https://firefairy.neocities.org/',
'https://novaverie.nekoweb.org/',
'https://asmodeusvulcan.neocities.org/',
'https://freakysunshine.neocities.org/',
'https://nik0la1.nekoweb.org/',
'https://08pescado.nekoweb.org/',
'http://volcanconhelado.neocities.org/',
'http://chimerathing.neocities.org/',
'https://pentumbra.neocities.org/',
'https://pixelglade.net/',
'https://nullafish-tank.neocities.org/'
];

//the name of the ring
var ringName = 'Transmasculine';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'transmasc_ring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://goooby.neocities.org/webring_index';

//should the widget include a random button?
var useRandom = false;
