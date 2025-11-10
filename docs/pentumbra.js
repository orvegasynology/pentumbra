  document.addEventListener("DOMContentLoaded", function() {
    const pentumbraDiv = document.getElementById("pentumbra");
    pentumbraDiv.innerHTML = `
        <style>
            .pentumbra h1 {
                font-size: 0;
                font-family: "ibmcga2y";
                font-weight: normal;
                text-shadow: 2px 2px black;
                color: white;
            }

            .pentumbra h1 span {
                font-size: 23px;
            }

            .lettera:hover {
                color: red;
                position: relative;
                bottom: 3px;
            }

            .lettera::selection {
                background-color: transparent;
                color: red;
            }

            .letterb:hover {
                color: orangered;
                position: relative;
                bottom: 3px;
            }

            .letterb::selection {
                background-color: transparent;
                color: orangered;
            }

            .letterc:hover {
                color: yellow;
                position: relative;
                bottom: 3px;
            }

            .letterc::selection {
                background-color: transparent;
                color: yellow;
            }

            .letterd:hover {
                color: lime;
                position: relative;
                bottom: 3px;
            }

            .letterd::selection {
                background-color: transparent;
                color: lime;
            }

            .lettere:hover {
                color: blue;
                position: relative;
                bottom: 3px;
            }

            .lettere::selection {
                background-color: transparent;
                color: blue;
            }

            .letterf:hover {
                color: magenta;
                position: relative;
                bottom: 3px;
            }

            .letterf::selection {
                background-color: transparent;
                color: magenta;
            }
        </style>
        <div class="pentumbra">
            <h1 class="">
                <span class="lettera">P</span>
                <span class="letterb">E</span>
                <span class="letterc">N</span>
                <span class="letterd">T</span>
                <span class="lettere">U</span>
                <span class="letterf">M</span>
                <span class="lettera">B</span>
                <span class="letterb">R</span>
                <span class="letterc">A</span>
            </h1>
        </div>
    `;
});