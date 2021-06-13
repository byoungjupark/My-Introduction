"use strict";


const btn = document.querySelector(".btn-toggle"); 
const currentTheme = localStorage.getItem("theme"); 

// 로컬스토리지에 현재 저장된 색상이 다크이면 
if (currentTheme == "dark") { 
    document.body.classList.add("dark-theme"); 
} 

// 버튼으로 다크모드 및 라이트모드 토글 
btn.addEventListener("click", function() { 
    document.body.classList.toggle("dark-theme"); 
    let theme = "light"; 
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark"; 
    } 
    localStorage.setItem("theme", theme); 
});