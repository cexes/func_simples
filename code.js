var data1 = new Date(2017,0,15)
            // 23/02/2017
           var data2 = new Date(2017,1,23)

           document.write(data1.toString())
           document.write("<hr/>")
           document.write(data2.toString())

           //converter data para calcular 
           document.write("<hr/>")
           document.write(data1.getTime())
           document.write("<hr/>")
           document.write(data2.getTime())

           // quantidade de mili segundos
            
               document.write("<hr/>")
               var mile_segundos = Math.abs(data1.getTime() - data2.getTime())
               document.write(mile_segundos)
               document.write("<hr/>")
               var milesgundos_por_dia = (24*60*60*1000)
               document.write("1 dia tem " + milesgundos_por_dia + " milesegundos por dia") 
               document.write("<hr/>")
               document.write("A diferença entre data um e data dois são " + Math.ceil( mile_segundos/ milesgundos_por_dia )+ " dias")