(function() {

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyCq6k7JcQ2_hzveK9uGCnlbkcQHZ_B7M90",
    authDomain: "sincronizar-objetos.firebaseapp.com",
    databaseURL: "https://sincronizar-objetos.firebaseio.com",
    projectId: "sincronizar-objetos",
    storageBucket: "sincronizar-objetos.appspot.com",
    messagingSenderId: "1018084768793"
  };
  firebase.initializeApp(config);

  
  //Acceder a elementos HTML a través del DOM
  const preObject = document.getElementById('objeto');
  const ulList = document.getElementById('lista');

  //crear referencia a la BD para sincronizar datos
  //firebase.database().ref() nos dirige a la raiz de la base de datos
  const dbRefObject = firebase.database().ref().child('objeto');
  const dbRefList = dbRefObject.child('habilidades');

  // ------------------------------- EVENTO VALUE ------------------------------- //
  //sincronizar cambios en OBJETOS DE BD
  //dbRefObject.on('value', snap => console.log(snap.val())); // salida por consola
  dbRefObject.on('value', snap => {
  	preObject.innerText = JSON.stringify(snap.val(),null, 3);
  });
  // ------------------------------- EVENTO VALUE ------------------------------- //


  // ------------------------------- EVENTO CHILD ------------------------------- //
  //Sincronizar cambios en LISTAS
  dbRefList.on('child_added', snap => {
  	const li = document.createElement('li');
  	li.innerText = snap.val();
  	li.id = snap.key;
  	ulList.appendChild(li);
  });

  dbRefList.on('child_changed', snap => {
  	const liChanged = document.getElementById('snap.key');
  	liChanged.innerText = snap.val();
  });

  dbRefList.on('child_removed', snap => {
  	const liToRemove = document.getElementById('snap.key');
  	liToRemove.remove();
  });
  // ------------------------------- EVENTO CHILD ------------------------------- //

  
} ());



