var cobyBtn = document.querySelectorAll(".cobyBtn")

cobyBtn.forEach(btn => {
    btn.addEventListener( "click" , () => {
        let bdg = btn.nextElementSibling;
        setTimeout( () => {
            bdg.style.display="inline"
        } , 200 );
        setTimeout( () => {
            bdg.style.display="none"
        } , 1400 );
    })
})

