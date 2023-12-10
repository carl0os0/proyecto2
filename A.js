document.getElementById('file-upload').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('generate-report').style.display = 'block';
    }
}

function generateReport() {
    const reportText = `
    <p><strong><H3>Análisis Detallado:</H3> Los accesorios desempeñan un papel crucial en la experiencia de un músico, y el inventario actual refleja 
        una amplia gama de opciones para satisfacer diversas necesidades. El "Capo traste" de la marca "Yamaha" destaca como una opción asequible, 
        mientras que el "Afinador" de "Elixir" ofrece funcionalidades avanzadas a un precio más elevado. 
        La presencia de marcas reconocidas como "Planet Waves" y "Sonora" garantiza la calidad y variedad para los clientes. La gestión del stock es esencial, 
        especialmente para productos con una alta rotación como las "Cuerdas Nylon" de "Planet Waves". La disponibilidad limitada del "Afinador"
         sugiere una posible demanda constante, lo que podría justificar un aumento en la cantidad almacenada para evitar la falta de existencias.</strong></p>
    
    <p><strong><H3>Perspectivas Futura:</H3>Explorar estrategias de marketing específicas para resaltar productos destacados, ofrecer paquetes de accesorios y guitarras, y considerar eventos promocionales para
         generar interés. La implementación de un sistema de comentarios de clientes puede proporcionar valiosas percepciones sobre la satisfacción del cliente y áreas de mejora.     
         
En conjunto, el inventario actual ofrece una gama completa de opciones para músicos de todos los niveles. Mantener un equilibrio entre la disponibilidad de productos 
populares y la introducción de nuevas opciones puede impulsar el crecimiento continuo del negocio.
</strong></p>
    `;
    document.getElementById('report-text').innerHTML = reportText;
    document.getElementById('remove-report').style.display = 'block';
    document.getElementById('generate-report').style.display = 'none';
    document.getElementById('report-text').style.display = 'block';
}

function removeReport() {
    document.getElementById('report-text').innerHTML = '';
    document.getElementById('remove-report').style.display = 'none';
    document.getElementById('generate-report').style.display = 'block';
    document.getElementById('report-text').style.display = 'none';
}