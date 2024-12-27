//PLUGIN

$(document).ready( app() );

function app() {

    $.smallBox = function(opciones) {

        opcionesPlugin = $.extend({
            titulo: '',
            subtitulo: '',
            texto: '',
            img: 'https://www.shareicon.net/data/256x256/2016/05/24/770117_people_512x512.png',
            icon: 'bi bi-ui-radios-grid',
            timeOut: 3000
        }, opciones);

        const {titulo, subtitulo, texto, img, icon, timeOut} = opcionesPlugin;

        let contenido = '';

        contenido += `
        <div class="smallBox-contenedor">
            <div class="smallBox-photo">
                <img src=${img} alt="foto-perfil">
            </div>

            <div class="smallBox-contenido">
                <div class="smallBox-texto">
                    <span class="smallBox-titulo">${titulo}</span>
                    <span class="smallBox-subtitulo">${subtitulo}</span>
                </div>

                <div class="smallBox-cajaColor">
                    <div class="smallBox-textoColor">
                        <i class="icon-1 bi bi-mic"></i> ${texto}
                    </div>
        
                    <div class="smallbox-iconColor">
                        <i class="icon-2 ${icon}"></i>
                    </div>
                </div>
            </div>
        </div>
        `;

        $('body').prepend(contenido);

        animarEntrada();

        setTimeout(() => {
            animarSalida();
        }, timeOut);

        setTimeout(() => {
            removeSmallbox();
        }, 5000)

        //Animar Entrada
        function animarEntrada() {
            const $smallBox = $('.smallBox-contenedor');

            $smallBox.animate({
                right: '+=510px',
                opacity: 1
            }, 1000);
        }

        //Animar Salida
        function animarSalida() {
            const $smallBox = $('.smallBox-contenedor');

            $smallBox.animate({
                right: '-=510px',
                opacity: 0
            }, 1000);
        }

        //Remove
        function removeSmallbox() {
            const $smallBox = $('.smallBox-contenedor');
            
            $smallBox.remove();
        }
    }
}
