

 const firebaseConfig = {
    apiKey: "AIzaSyA3aiHqmK-4HSu6oTuCUjVit6zgDPT2wsk",
    authDomain: "capsicum-af2e6.firebaseapp.com",
    databaseURL: "https://capsicum-af2e6-default-rtdb.firebaseio.com",
    projectId: "capsicum-af2e6",
    storageBucket: "capsicum-af2e6.firebasestorage.app",
    messagingSenderId: "121949275235",
    appId: "1:121949275235:web:4cf419be536bc478652456"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  var resFormDB = firebase.database().ref("resForm");

  document.getElementById('resForm').addEventListener("submit", submitForm);
  document.getElementById('resForm').addEventListener("submit", sendMail);

  function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal('name');
    var email = getElementVal('email');
    var datetime = getElementVal('datetime');
    var select = getElementVal('select1');
    var message = getElementVal('message');

    saveMessages(name, email, datetime, select, message);

    // enable alert

    document.querySelector('.alert').style.display='block';

    // remove alert message
    setTimeout(() => {
        document.querySelector('.alert').style.display='none';
    }, 3000);

    //reset form
    // document.getElementById('resForm').reset();o
  }


  const saveMessages = (name, email, datetime, select, message)=>{
    var newresForm = resFormDB.push();

    newresForm.set({
        name: name,
        email : email,
        datetime: datetime,
        select : select,
        message : message
    });
  }

  //Send email 
  function sendMail(){
    try{var params={
      name : getElementVal('name'),
      email : getElementVal('email'),
      datetime : getElementVal('datetime'),
      select : getElementVal('select1'),
      message : getElementVal('message'),
    }

    emailjs.send('service_3ntclr8','template_wvy91dm',params);
  }catch(e) {
    console.log(e)
  }finally{
    document.getElementById("resForm").reset()
  }
  }


  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }

  