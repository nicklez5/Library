document.addEventListener('DOMContentLoaded', function() {

    const rootStyles = window.getComputedStyle(document.documentElement)
    if(rootStyles.getPropertyValue('--book-cover-width-large') != null && rootStyles.getPropertyValue('--book-cover-width-large') !== ''){
        ready()
    }else{
        document.getElementById('main-css').addEventListener('load',ready)
    }
    function ready(){
        const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
        const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
        const coverHeight  = coverWidth / coverAspectRatio;
        FilePond.registerPlugin(FilePondPluginImagePreview);
  
        FilePond.registerPlugin(FilePondPluginImageResize);
    
        FilePond.registerPlugin(FilePondPluginFileEncode);
        
        FilePond.setOptions({
            stylePanelAspectRatio: 1/ coverAspectRatio,
            imageResizeTargetWidth: coverWidth,
            imageResizeTargetHeight: coverHeight
        })
        const inputElement = document.querySelector('input[type="file"]');
    
        const pond = FilePond.create(inputElement);
    
        FilePond.parse(document.body);
  
    }
    
});  