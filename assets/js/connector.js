

const connectorContainer = document.getElementById('connector-container');


const otherServicesSVG = d3.select('#svg-container-curve');


const path = otherServicesSVG.select("#curve-arrow");






function connect(selector1, selector2)
{
    const pointA = document.getElementById(selector1);

    const pointB = document.getElementById(selector2);

    const c = connectorContainer.getBoundingClientRect();



    let r1 = pointA.getBoundingClientRect();
    let r2 = pointB.getBoundingClientRect();


    const start = {

        x:r1.left - c.left ,
        y:r1.top - c.top + r1.height/2
    };

    const end = {

        x:r2.left - c.left,
        y:r2.top - c.top + r2.height/2
    };

    // Bezier Control Points

    const cx1 = (start.x  - 80 );

    const cy1 = start.y;

    const cx2 = end.x - 80 ;
    const cy2 = end.y;

    const d = `M ${start.x}, ${start.y} C ${cx1},${cy1} ${cx2}, ${cy2} ${end.x}, ${end.y} `;

    path.attr("d",d);



    



}

function connectRightSide(selector1, selector2)
{
    const pointA = document.getElementById(selector1);

    const pointB = document.getElementById(selector2);

    const c = connectorContainer.getBoundingClientRect();



    let r1 = pointA.getBoundingClientRect();
    let r2 = pointB.getBoundingClientRect();


    const start = {

        x:r1.right - c.left ,
        y:r1.top - c.top + r1.height/2
    };

    const end = {

        x:r2.right - c.left,
        y:r2.top - c.top + r2.height/2
    };

    // Bezier Control Points

    const cx1 = (start.x  - 80 );

    const cy1 = start.y;

    const cx2 = end.x - 80 ;
    const cy2 = end.y;

    const d = `M ${start.x}, ${start.y} C ${cx1},${cy1} ${cx2}, ${cy2} ${end.x}, ${end.y} `;

    path.attr("d",d);



    



}

function connect_Sshaped(selector1, selector2)
{
    const pointA = document.getElementById(selector1);

    const pointB = document.getElementById(selector2);

    const c = connectorContainer.getBoundingClientRect();



    let r1 = pointA.getBoundingClientRect();
    let r2 = pointB.getBoundingClientRect();


    const start = {

        x:r1.left - c.left ,
        y:r1.top - c.top + r1.height/2
    };

    const end = {

        x:r2.left - c.left,
        y:r2.top - c.top + r2.height/2
    };

    const dx = end.x - start.x;


    // Bezier Control Points

    const cx1 = (start.x  + dx * 0.2 );

    const cy1 = start.y;

    const cx2 = end.x - dx * 0.2 ;
    const cy2 = end.y;

    const d = `M ${start.x}, ${start.y} C ${cx1},${cy1} ${cx2}, ${cy2} ${end.x}, ${end.y} `;

    path.attr("d",d);



    



}
function connectRightSide_Sshaped(selector1, selector2)
{
    const pointA = document.getElementById(selector1);

    const pointB = document.getElementById(selector2);

    const c = connectorContainer.getBoundingClientRect();



    let r1 = pointA.getBoundingClientRect();
    let r2 = pointB.getBoundingClientRect();


    const start = {

        x:r1.right - c.left ,
        y:r1.top - c.top + r1.height/2
    };

    const end = {

        x:r2.left - c.left,
        y:r2.top - c.top + r2.height/2
    };

    const dx = end.x - start.x;


    // Bezier Control Points

    const cx1 = (start.x  + dx * 0.5 );

    const cy1 = start.y;

    const cx2 = end.x - dx * 0.5 ;
    const cy2 = end.y;

    const d = `M ${start.x}, ${start.y} C ${cx1},${cy1} ${cx2}, ${cy2} ${end.x}, ${end.y} `;

    path.attr("d",d);



    



}


function connectRightSide_Reflex(selector1, selector2)
{
    const pointA = document.getElementById(selector1);

    const pointB = document.getElementById(selector2);

    const c = connectorContainer.getBoundingClientRect();



    let r1 = pointA.getBoundingClientRect();
    let r2 = pointB.getBoundingClientRect();


    const start = {

        x:r1.right - c.left ,
        y:r1.top - c.top + r1.height/2
    };

    const end = {

        x:r2.left - c.left,
        y:r2.top - c.top + r2.height/2
    };

    const dx = end.x - start.x;
    const dy = end.y - start.y;


    // Bezier Control Points

    const cx1 = (start.x  + dx * 0.6 );

    const cy1 = start.y - dy * 0.4; 

    const cx2 = end.x - dx * 0.6 ;
    const cy2 = end.y + dy * 0.4;

    const d = `M ${start.x}, ${start.y} C ${cx1},${cy1} ${cx2}, ${cy2} ${end.x}, ${end.y} `;

    path.attr("d",d);



    



}




function updateConnectors()

{

    // connect('pointA2','pointA1');

    // connectRightSide('pointA2','pointA1');
    connectRightSide_Reflex('pointA2','pointA1');

}


window.addEventListener("resize", updateConnectors);





 




