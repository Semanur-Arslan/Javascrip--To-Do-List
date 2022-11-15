let ekleButonu = document.querySelector('#liveToastBtn') //butona ulaştık
const liste = document.querySelector('#list') // listeye (ul yapısına) ulaştık
const info = document.querySelector('#task') // input alanına ulaştık



ekleButonu.addEventListener('click', ekle ) // butona bir event ve fonksiyon ekledik
ekleButonu.addEventListener('click', kaydet)

function kaydet(event){
    event.preventDefault() 
    console.log('işlem gerçekleşti')

    const info = document.querySelector('#task') // eklenecek elemana ulaştık
    localStorage.setItem('yeni liste ögesi', info.value) // localStorage'e kaydettik
  
}


// ELEMENT EKLEMEMİZİ SAĞLAYAN FONKSİYONUMUZ
function ekle(event){
    if(info.value == null || info.value == ""){

        $('.dont').toast('show')
        // toats kodu ile html'de kurulmuş olan uyarı yapısını sınıf(.dont) bilgisi ile çağırdık.

    }else{
       
        const text = document.createTextNode(info.value) //inputa yazılacak yazıyı bir değişkene aktardık
        let li = document.createElement('li') // boş bir liste elemanı oluşturduk.
        

        liste.appendChild(li)// ulaştığımız listeye li elementini ekledik
        li.appendChild(text) // li elemantinin içine yazıyı yazdırdık
        

        info.value = ''; //eleman eklediğimizde buton sıfırlanması için


        // yeni eklenen liste elemanlarına x eklemek için aşağıdaki aşamaları yazdık.
        let span = document.createElement('span')
        let crossİcon = document.createTextNode('x')
        span.className = 'close'
        span.appendChild(crossİcon)
        li.appendChild(span)




        // x bastığımızda li elemanının silinmesi için şu aşamaları yazdık
        span.onclick = function(){
            let sil = span.parentElement; // spanın parentElementi bir üstüdür.(li)
           sil.style.display='none' // li elementini siler
        }

        
        //  toats kodu ile html'de kurulmuş olan uyarı yapısını sınıf(.do) bilgisi ile çağırdık.
        $('.do').toast('show')

    }


}




// LİSTEDEKİ ELEMANLARI CHECKE ETMEMİZİ SAĞLAYAN SAĞLAYAN FONKSİYONUMUZ
liste.addEventListener('click',checke) // ul yapısına yukarda erişmiştik.bu yapıya event ekledik

function checke(item){
    if(item.target.tagName = 'li'){ // eğer tagname'i li ise target ile itemi çalışır hale getirir.
        item.target.classList.toggle('checked')// item çalıştıında checked sınıfının geçerli olması için toggle ile sınıf eklemesi yapıyoruz


        //check edilen liste elemanlarını silmek için bu fonksiyonun içerisine tamamlananıSil fonksiyonu ekledik
        let buton = document.querySelector('#tamamlanan')
        let checkList = document.querySelectorAll('.checked')

        buton.addEventListener('click', tamamlananıSil)
       
        function tamamlananıSil(event){
           checkList.forEach(function(item){
           item.style.display = 'none'
        })
}

    }

}




//TÜMÜNÜ SİL İÇİN FONKSİYONUMUZ

//ul yapısına ulaşmıştık yukarıda liste olarak tanımlamıştık.






//check edilen liste elemanlarını silmek için bu fonksiyonun içerisine tamamlananıSil fonksiyonu ekledik
// let buto = document.querySelector('#tamamlanan')
// let checkList = document.querySelectorAll('.checked')

// buton.addEventListener('click', tamamlananıSil)
// function tamamlananıSil(event){
// checkList.forEach(function(item){
// item.style.display = 'none'
// })





