const tabBtns = document.querySelectorAll('.tab-btn');
const details = document.querySelectorAll('.details');
const aboutDetails = document.querySelector('.about-details');


aboutDetails.addEventListener('click', (e) =>{
    console.log(e.target);
    tabBtns.forEach((btn) =>{
        btn.classList.remove('active');
    })
    e.target.classList.add('active');
    details.forEach((detail) =>{
           
            if(detail.classList.contains(e.target.dataset.id)){
                detail.classList.remove('hide');
             
            }
            else{
                detail.classList.add('hide');
                }

        })
})




