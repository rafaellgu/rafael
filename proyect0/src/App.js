
import './App.css';

function App() {
  return (

    <div className="Encabezado inicial">
      <div className="linea-superior">
        <div className="seccion-izquierda"></div>
        <div className="centro"></div>
        <div className="seccion-derecha"></div>
      </div>
      <header className="App-header">
        <img src="/Recurso 1.png" alt="Recurso" className="imagen-izquierda" />

      <div className="lado-derecho">
        <h1 className="SICRP">SICRP</h1>
        <div className="linea-horizontal"></div>
        <p className="SIDCDRDP">SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</p>

        <div className="contenedor">
          <input type="text" placeholder="ID PATRULLA" className="cagon" />
          <input type="text" placeholder="CUADRANTE" className="cagon" />
        </div>

        <button className="boton">INGRESAR</button>

        <img src="/Recurso 2.png" alt="Recurso pequeño" className="imagen-inferior" />  
      </div>
        
      
        <div className="linea-vertical"></div>
      </header>

      

      /*segunda pantalla*/
      <div className="Encabezado mitad">
        <div className="linea-superior">
          <div className="seccion-izquierda"></div>
          <div className="centro"></div>
          <div className="seccion-derecha"></div>
        </div>
      </div>

      <div class="container">
       
       <div class="con-izquierdo">
           <ul>
               <li><a href="#"><img src="cas.png" alt="Inicio" class="img"/> INICIO</a></li>
               <li><a href="#"><img src="cas.png" alt="Reporte Cuadrante" class="img"/> REPORTE CUADRANTE</a></li>
               <li><a href="#"><img src="cas.png" alt="Cuadrantes" class="img"/> CUADRANTES</a></li>
               <li><a href="#"><img src="cas.png" alt="Patrullas" class="img" /> PATRULLAS</a></li>
           </ul>  
       </div>
       
       <div class="imagen-dentro">
           
               <img src="Recurso 1.png" alt="Código QR SICRP" class="imagen-"/>
           
          
           <div class="logo-abajo">
               <img src="Recurso 2.png" alt="Logo Municipalidad" />
           </div>
       </div>
   </div>




   /*tercera pantalla*/
   <div className="Encabezado ultimo">
        <div className="linea-superior">
          <div className="seccion-izquierda"></div>
          <div className="centro"></div>
          <div className="seccion-derecha"></div>
        </div>
      </div>
      <div class="container">       
       <div class="con-izquierdo">
           <ul>
               <li><a href="#"><img src="cas.png" alt="Inicio" class="img"/> INICIO</a></li>
               <li><a href="#" class="ca"><img src="casbl.png" alt="Reporte Cuadrante" class="img"/> REPORTE CUADRANTE</a></li>
               <li><a href="#"><img src="cas.png" alt="Cuadrantes" class="img"/> CUADRANTES</a></li>
               <li><a href="#"><img src="cas.png" alt="Patrullas" class="img" /> PATRULLAS</a></li>
           </ul>  
       </div>       
       <div class="imagen-dentro">
          <img src="Recurso 1.png" alt="Código QR SICRP" class="imagen-"/>          
      <div class="tabla">   
        <table>
          <thead>
            <tr>
              <th >ID</th>
              <th>PATRULLA</th>
              <th>CUADRANTE</th>
              <th>UBICACIÓN</th>
              <th>RECORRIDO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>    
      </div>
          <div class="logo-abajos">
               <img src="Recurso 2.png" alt="Logo Municipalidad"/>
           </div>
       </div>
   </div>

    
    </div>
  );
}

export default App;
