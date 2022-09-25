const bgElements = () => {
  const elements = document.querySelectorAll('.set-bg');

  elements.forEach(item => 
    item.style.backgroundImage = `url('${item.dataset.setbg}')`
  )

  // for (let i = 0; i < elements.length; i++) {
  //   const src = elements[i].dataset.setbg;
  //   elements[i].style.backgroundImage = `url('${src}')`;
  // }
};

bgElements();