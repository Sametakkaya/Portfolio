//section-1 JS
//icons

//değişkenler
const icons = document.querySelectorAll('.icons-container i')
let iIcon = 1

//Tekrarlanan animasyon
setInterval(() => {
  iIcon++
  const icon = document.querySelector('.icons .change')
  icon.classList.remove('change')

  //nextElementSibling son elemana geldikten sonra hata verir. Bunu engellemek için globalde bir i değişkeni tanımlayıp her tekrarda i'yi büyütüp koşul olarak icons.length'i geçmemesini sağladım
  if (iIcon > icons.length) {
    icons[0].classList.add('change')
    iIcon = 1
  } else {
    icon.nextElementSibling.classList.add('change')
  }
}, 2500)
