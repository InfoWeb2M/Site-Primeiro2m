function menuResponsivo() {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');
    
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animação de cascata para os itens da lista
    if (navList.classList.contains('active')) {
        const items = navList.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.animation = `fadeInUp 0.3s ease forwards ${index * 0.1}s`;
        });
    } else {
        const items = navList.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.animation = `fadeOutDown 0.3s ease forwards ${index * 0.05}s`;
        });
    }
}