const albums = [
    {
        "title": "System of A Down (Self Titled)",
        "albumCover": "/data/assets/album/mind.jpeg",
        "src": "https://www.youtube.com/watch?v=wxdoYKeTHtc",
        "info": "SOAD / 1998 / Nu-Metal",
        "rating": "&starf; &starf; &starf; &starf; &starf;",
        "why": "System of a Down's self titled album was my introduction to metal at a young age, specifically the songs <code>SPIDERS</code> and <code>PEEPHOLE</code>.<br><br>favorite songs: Mind, Suite Pee<br>known for: Spiders, Sugar"
    },
    {
        "title": "For Your Own Special Sweetheart",
        "albumCover": "/data/assets/album/jawbox.jpeg",
        "src": "https://jawbox.bandcamp.com/album/for-your-own-special-sweetheart",
        "info": "Jawbox / 1994 / Post-Punk",
        "rating": "&starf; &starf; &starf; &star; &star;",
        "why": "ill be honest. i got into this band from deftones' cover. <br><br> I really love the cover art and overrall aesthetic of the album songs. Jawbox is a severely underrated band! While there are 5 great songs i really like, there are also songs I straight up dislike (FF=66, Cooling Card), but even so, I enjoy listening to the album in its entirety<br><br> favorite songs: Savory, Jackpot plus!, Green Glass, Sound on Sound. <br>known for: Savory... SAAAAAVOOOORY"
    },
    {
        "title": "SPEEDKORE 4 KIDZ!",
        "albumCover": "/data/assets/album/tqbf.jpeg",
        "src": "https://msx.horse/backcat.php?search=SPEEDKORE+4+KIDZ",
        "info": "TQBF / 2009 / Speedcore",
        "rating": "&starf; &starf; &starf; &starf; &star;",
        "why": "This album is what got me into speedcore! it confused the hell out of me (this was before i got really into Lapfox/Halley Labs) but I really enjoy it! <br><br>  favorite songs: Rip Roar Power, Holy Macaroni<br>known for: either Serious Shit or The Big Black"
    },
    {
        "title": "Mammilian Sighing Reflex",
        "albumCover": "/data/assets/album/willgold.jpeg",
        "src": "https://www.youtube.com/watch?v=K6yBPk5jBfk",
        "info": "Wilbur Soot* / 2023 / Acoustic",
        "rating": "&starf; &starf; &starf; &starf; &star;",
        "why": "holy cow. i cry to this album every other day <br><br> favorite songs: Amazon Standing Lamp, 10 Week Rule<br>known for: idk. the wilbur soot fanbase is a dumpster fire. <br><br>**I am aware of how controversial he is. I will remain neutral.** "
    },
    {
        "title": "The Normal Album",
        "albumCover": "/data/assets/album/will.jpeg",
        "src": "https://willwoodmusic.bandcamp.com/album/the-normal-album",
        "info": "Will Wood / 2020 / Avant Garde",
        "rating": "&starf; &starf; &starf; &star; &star;",
        "why": "this album is so gay. everyone loves willy wood. <br><br> favorite songs: Outliars and Hyppocrates, 'Love, Me Normally', Momento Mori<br>known for: 2econd 2nite 2eer"
    },
    {
        "title": "Abbey Road",
        "albumCover": "/data/assets/album/beatles.jpeg",
        "src": "https://www.thebeatles.com/abbey-road",
        "info": "The Beatles / 1969 / Blues Rock",
        "rating": "&starf; &starf; &starf; &starf; &star;",
        "why": "everyone loves the beatles whether you don't listen to them (thats a lie btw, theyre everywhere) or you do. <br><br>favorite songs: the entire album. and I Want You (Shes So Heavy)<br>known for: Come Together, Here Comes The Sun, actually nvm everyone knows every track on the album"
    },
    {
        "title": "Songs About My Cats",
        "albumCover": "/data/assets/album/vsnare.jpeg",
        "src": "https://venetiansnares.bandcamp.com/album/songs-about-my-cats",
        "info": "VSnares / 2001 / Breakcore",
        "rating": "&starf; &starf; &starf; &starf; &star;",
        "why": "my introduction to traditional breakcore. Fluff Master scared me. Lots of distortion and sick beats. RIP.  meow meow meow meow <br><br>favorite songs: Fluff Master, Cleaning Each Other<br>known for: Probably Fluff Master idk"
    },
    {
        "title": "C*nt Kicker",
        "albumCover": "/data/assets/album/lady.jpeg",
        "src": "https://www.discogs.com/master/82761-Ladyscraper-Cunt-Kicker",
        "info": "Ladyscraper / 2006 / Breakcore",
        "rating": "&starf; &starf; &starf; &star; &star;",
        "why": "another traditional breakcore album. Lots of screaming, distortion, and schzoid beatz.<br><br>favorite songs: My Gums Bleed for this Type of Shit, Werewolf Syndrome Destroyed Your Family<br>known for: My Gums Bleed for this Type of Shit"
    },
    {
        "title": "Saturday Night Wrist",
        "albumCover": "/data/assets/album/deftones.jpeg",
        "src": "https://www.youtube.com/watch?v=DVnOQlWpgKo",
        "info": "Deftones / 2006 / Alt-Metal",
        "rating": "&starf; &starf; &starf; &star; &star;",
        "why": "This is the album that got me into ambient music. Konami is such an ethereal and peculiar song. Honestly, reviere and konami save this album for me, every other song is cool, just not as great as them. also, mein is a song that truly made me hate deftones at first because serj tankian was a backing vocal lmfao. i like this song now but thats still so funny to me <br><br> i also own this album on a disc.<br><br>favorite songs: UUDDLRLRAB Select Start (Konami), Reviere, Mein<br>Cherry Waves"
    },
    {
        "title": "MM... Food",
        "albumCover": "/data/assets/album/mf.jpeg",
        "src": "https://mfdoom.bandcamp.com/album/mm-food",
        "info": "MF DOOM / 2004 / Hip Hop",
        "rating": "&starf; &starf; &starf; &starf; &star;",
        "why": "coco bread con queso - I normally hate hiphop but MF DOOM is just different.<br><br> favorite songs: kon queso, one beer, hoe cakes<br>known for: The entire album"
    },
    {
        "title": "Team Sleep",
        "albumCover": "/data/assets/album/teamslee.jpeg",
        "src": "https://www.youtube.com/watch?v=6u_fJ_Iz2rY",
        "info": "Team Sleep / 2005 / Alt",
        "rating": "&starf; &starf; &starf; &starf; &star;",
        "why": "Second album that got me into ambience and edm. <br><br>favorite songs: King Diamond, Princeton Review <br>known for: Your Skull is Red, Blvd Nights"
    },
    {
        "title": "Nevermind",
        "albumCover": "/data/assets/album/nirvana.jpeg",
        "src": "https://www.youtube.com/watch?v=gJcua-b1f6Y",
        "info": "Nirvana / 1991 / Rock",
        "rating": "&starf; &starf; &starf; &starf; &star;",
        "why": "I love them!! They got me into genuine rock and some classic metal.<br><br>favorite songs: drain you, endless nameless<br>known for: smells like teen spirit"
    },
    {
        "title": "arc,regn",
        "albumCover": "/data/assets/album/greenboy.jpeg",
        "src": "https://lapfox.bandcamp.com/album/arc-regn",
        "info": "Greenhouse / 2023 / Glitch",
        "rating": "&starf; &starf; &starf; &star; &star;",
        "why": "... mantis is literally just bugs, yet it goes so hard.<br><br>favorite songs: mantis, theriocide"
    },
    {
        "title": "Snot",
        "albumCover": "/data/assets/album/snot.jpeg",
        "src": "https://www.youtube.com/watch?v=jL7mCxR3NfM",
        "info": "Snot / 1999 / Nu-Metal",
        "rating": "&starf; &starf; &starf; &star; &star;",
        "why": "I got into them from serj. i truly believe this band had true potential. rip lynn strait.<br><br>favorite songs: Deadfall, 313, Snooze Button<br>known for: Starlit Eyes + Others"
    },
    {
        "title": "Psalms (Mute)",
        "albumCover": "/data/assets/album/psalms.jpeg",
        "src": "https://lapfox.bandcamp.com/album/psalms-mute",
        "info": "Rhode Strixxman / 2021 / Ambient",
        "rating": "&starf; &starf; &starf; &starf; &starf;",
        "why": "Noise. This album is the reason I want to get into sound design. its the reason that I've learned that music is everywhere. Clack. Bang. Boom. Pop. <br><br>favorite song: Kandi Kid don't Lose Your Way<br>known for: serpentine (w/ deuteronomy)"
    },
    ];
const container = document.getElementById('items-container');

albums.sort(() => Math.random() - 0.5).forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    itemDiv.innerHTML = `
        <h1 class="title">${item.title}</h1>
        <div class="etem">
            <div>
                <a href="${item.src}" target="h"><img class="album-cover" src="${item.albumCover}"></a>
            </div>
            <p class="info">${item.info}</p>
            <p class="rating">${item.rating}</p>
            <div class="why"><p>${item.why}<br><br><p><span class="rating-stars" data-rating="0">What do you think? <br>
            <p class="response"></p>
                <span class="star" data-value="1">&star;</span>
                <span class="star" data-value="2">&star;</span>
                <span class="star" data-value="3">&star;</span>
                <span class="star" data-value="4">&star;</span>
                <span class="star" data-value="5">&star;</span>
            </span></p>
            </div>
        </div>
    `;

    const stars = itemDiv.querySelectorAll('.star');
    const response = itemDiv.querySelector('.response');

    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            const value = star.getAttribute('data-value');
            stars.forEach(s => {
                s.innerHTML = value >= s.getAttribute('data-value') ? '&starf;' : '&star;';
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => {
                s.innerHTML = s.getAttribute('data-value') <= item.rating.split('&star;').length - 1 ? '&starf;' : '&star;';
            });
        });

        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            let feedback = '';
            switch (value) {
                case '1':
                    feedback = 'i hate your interests';
                    break;
                case '2':
                    feedback = 'ew';
                    break;
                case '3':
                    feedback = 'noice';
                    break;
                case '4':
                    feedback = 'yes';
                    break;
                case '5':
                    feedback = 'this album is awesome';
                    break;
            }
            response.innerHTML = feedback;
            itemDiv.querySelector('.rating-stars').setAttribute('data-rating', value);
        });
    });

    itemDiv.querySelector('.etem').addEventListener('mouseenter', () => {
        itemDiv.querySelector('.etem').classList.add('highlight');
        itemDiv.querySelector('.title').classList.add('highlight');
    });

    itemDiv.querySelector('.etem').addEventListener('mouseleave', () => {
        itemDiv.querySelector('.etem').classList.remove('highlight');
        itemDiv.querySelector('.title').classList.remove('highlight');
    });

    container.appendChild(itemDiv);
});
