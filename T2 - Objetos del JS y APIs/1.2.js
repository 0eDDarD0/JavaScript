fechahoy = new Date();
document.write(fechahoy);

fecha85 = new Date(fechahoy)
fecha85.setDate(fecha85.getDate() + 85);
document.write("<br>" + fecha85);

fecha187 = new Date(fechahoy)
fecha187.setDate(fecha187.getDate() - 187);
document.write("<br>" + fecha187);

fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write("<br>" + fecha85);

fecha187.setHours(fecha187.getHours() - 24);
document.write("<br>" + fecha187);

fechaResto = fecha85 - fecha187;
document.write("<br>" + fechaResto);
