const vize=document.getElementById("vize"),
    final=document.getElementById("final"),
    hesapla=document.getElementById("hesapla"),
    sonuc=document.getElementById("sonuc");
    const Hesapla =()=>{
            sonuc.innerText="Ortalamanız: "+ (vize.value*0.4+final.value*0.6)
    }
    hesapla.addEventListener("click",Hesapla);