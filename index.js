/**
 * Get perfect shadows every time for the non-designer.
 *
 * @param {any} options simple object, with next fields: shadow_type - _hard | soft_ (Defaults to soft) & padding - _boolean_ (Defaults to false).
 */
function shadowizard(options) {
    let images = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === 'hard')
        options.shadow_type = '0px';
    else
        options.shadow_type = '15px';

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
        
        if(options.padding) {
            image.style.padding = '1em';
        }
    });
}

module.exports.shadowizard = shadowizard;