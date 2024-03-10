const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.manu-item');

menuToggle.addEventListener('click', function() {
  menuItems.classList.toggle('active');
});
// الحصول على عناصر القائمة وصناديق الصور
const salads = document.getElementById('salads');
const soup = document.getElementById('soup');
const sandwech = document.getElementById('sandwech');
const sweet = document.getElementById('sweet');

const box1 = document.querySelector('.food .img-food .box1');
const box2 = document.querySelector('.food .img-food .box2');
const box3 = document.querySelector('.food .img-food .box3');
const box4 = document.querySelector('.food .img-food .box4');

// تعيين الأحداث لكلمات القائمة
salads.addEventListener('click', () => {
  // إظهار صندوق الصور المطلوب وإخفاء الباقي
  box1.classList.add('active');
  box2.classList.remove('active');
  box3.classList.remove('active');
  box4.classList.remove('active');
  soup.classList.remove('active');
  salads.classList.add('active');
  sandwech.classList.remove('active');
  sweet.classList.remove('active');});

soup.addEventListener('click', () => {
  // إظهار صندوق الصور المطلوب وإخفاء الباقي
  box1.classList.remove('active');
  box2.classList.remove('active');
  box3.classList.add('active');
  box4.classList.remove('active');
  soup.classList.add('active');
  salads.classList.remove('active');
  sandwech.classList.remove('active');
  sweet.classList.remove('active');
});

sandwech.addEventListener('click', () => {
  // إظهار صندوق الصور المطلوب وإخفاء الباقي
  box1.classList.remove('active');
  box2.classList.add('active');
  box3.classList.remove('active');
  box4.classList.remove('active');
  soup.classList.remove('active');
  salads.classList.remove('active');
  sandwech.classList.add('active');
  sweet.classList.remove('active');
});

sweet.addEventListener('click', () => {
  // إظهار صندوق الصور المطلوب وإخفاء الباقي
  box1.classList.remove('active');
  box2.classList.remove('active');
  box3.classList.remove('active');
  box4.classList.add('active');
  soup.classList.remove('active');
  salads.classList.remove('active');
  sandwech.classList.remove('active');
  sweet.classList.add('active');
});