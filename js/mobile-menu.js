function closeMenu() {
  const x = document.querySelector('nav');
  x.classList.remove('responsive'); // 메뉴 접기
  
  const y = document.querySelector('nav .icon');
  y.classList.remove('open'); // x모양에서 햄버거 모양으로 복귀
}

function toggleMenu() {
  const x = document.querySelector('nav');
  x.classList.toggle('responsive'); // 메뉴 토글
  
  const y = document.querySelector('nav .icon');
  y.classList.toggle('open'); // 햄버거 아이콘 토글
}