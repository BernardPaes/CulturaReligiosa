

    // Função para mostrar seções conforme o scroll
    function observeSections() {
        const sections = document.querySelectorAll('.story-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Função para toggle de conteúdo interativo
    function toggleContent(id) {
        const content = document.getElementById(id);
        content.classList.toggle('active');
    }

    // Função para navegar entre seções
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Inicializar observadores quando a página carregar
    document.addEventListener('DOMContentLoaded', () => {
        observeSections();
        // Mostrar primeira seção imediatamente
        document.getElementById('section1').classList.add('visible');
    });

    // Efeito de digitação no título
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    document.addEventListener('DOMContentLoaded', () => {
        observeSections();
        document.getElementById('section1').classList.add('visible');
        // Adicione estas linhas para ativar o efeito de digitação no título
        const mainTitle = document.querySelector('.header h1');
        if (mainTitle) {
            const originalText = mainTitle.textContent; // Guarda o texto original
            typeWriter(mainTitle, originalText); // Chama a função
        }
    });
