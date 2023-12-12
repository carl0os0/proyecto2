document.getElementById('file-upload').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('generate-report').style.display = 'block';
    }
}



function generateReport() {
    const reportText = `
    <p><H3><CENTER>Reporte de Base de Datos</H3></center>
    Resumen Ejecutivo
    Este informe presenta un análisis de datos recopilados de la base de datos de guitarras durante el periodo [12/2/2023 - 12/10/2023]. Los datos han sido extraídos y procesados a partir de un archivo ReportGrape, permitiendo identificar tendencias y métricas clave relevantes para la toma de decisiones.<hr>
    
    Métricas Principales
    Total de Registros
    El archivo ReportGrape contiene un total de 43 registros.<hr>
    Registros por Categoría<hr>
    Categoría A: 15<hr>
    Categoría B: 13<hr>
    Categoría C: 15<hr>
    Promedio de Valores
    El valor promedio de precio de guitarras es 14845<hr>
    El valor promedio de precio de accesorios es 793.33<hr>
    Máximo y Mínimo<hr>
    El valor máximo registrado de precio de guitarras es 25600.<hr>
    El valor mínimo registrado de precio de guitarras es 9000.<hr>
    Análisis Detallado<hr>
    
    Correlaciones<hr>
    Se ha identificado una correlación Positiva entre precio de guitarras y precio de accesorios. Esta relación puede indicar que los accesorios de mayor calidad se venden junto con guitarras de mayor calidad, o que los compradores de guitarras de mayor precio están dispuestos a gastar más en accesorios para complementar su compra. <hr>
    
    Conclusiones<hr>
    El análisis de la base de datos a través del archivo ReportGrape proporciona una visión integral de aspectos importantes para su empresa. Las tendencias identificadas pueden ser utilizadas para que a medida que el precio de las guitarras aumenta, también lo hace el precio de los accesorios.
    
    Se recomienda realizar un seguimiento continuo de estos datos para validar y ajustar las conclusiones obtenidas en este informe.
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