// ServiceWorker
if ('serviceWorker' in navigator) {
    console.log('Puedes usar los serviceWorkers en tu navegador');

    navigator.serviceWorker.register('sw.js')
                            .then(res => console.log('ServiceWorker cargo correctamente', res))
                            .catch(err => console.log('ServiceWorker no se cargo registro correctamente', err))
}else{
    console.log('No puedes usar los servicesWorkers del navegador')
}

// Scroll suavizado
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    })
});