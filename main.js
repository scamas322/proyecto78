var imagenes= ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var nombres= ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0

function update ()
{
   i++;
   var nombre_de_miembro_familiar_array = 5
    if(i > nombre_de_miembro_familiar_array)
      {
          i = 0;
      }
      var updateImage = imagenes[i];
var updatename = nombres[i];
document.getElementById("miembro_familiar").src = updateImage;
document.getElementById("nombre_de_miembro_familiar").innerHTML = updatename;
}
