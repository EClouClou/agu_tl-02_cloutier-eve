horseshoe = new RGraph.SVG.Horseshoe({
    id: 'chart-container',
    min: 0,
    max: 100,
    value: 20,
    options: {
        labelsCenterDecimals: 1,
        labelsCenterUnitsPost: '%'
    }
}).grow();

//Cette fonction permet de faire bouger le pourcentage du cercle, mais je ne le souhaite pas. Je veux qu'il reste fixe.
/*var d = 2500; setTimeout(f = function ()
{
    horseshoe.value = horseshoe.value + RGraph.SVG.random({min: -7, max: 5});
    horseshoe.grow();
    
    setTimeout(f, d);
}, d);*/

data = [52,14];

new RGraph.SVG.Pie({
    id: 'chart-container2',
    data: data,
    options: {
        labels: ['Douleur modérée (52%)','Douleur grave (14%)'],
        shadow: true,
        colorsStroke: 'rgba(0,0,0,1)',
        linewidth: 0,
        exploded: [,,25],
        colors: ['#F2BFAF','#4E4D4D'],
        tooltips: '%{key}',
        tooltipsFormattedKeyLabels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        tooltipsFormattedUnitsPost: '%',
        tooltipsCss: {
            backgroundColor: '#333',
            fontWeight: 'bold',
            fontSize: '14pt',
            opacity: 0.85
        }
    }
}).draw();