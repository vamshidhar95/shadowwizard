function shadowwizard(params) {
    let images = document.querySelectorAll('.shadowwizard');

    if(options.shadow_type === "hard"){
        options.shadow_type = '0px'
    }else
        options.shadow_type = '15px'

        images.forEach(image => {
            image.getElementsByClassName.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.2)`;

            if(options.padding){
                image.style.padding = '1em'
            }
        })

}

module.exports.shadowwizard = shadowwizard;