

function adddriver()
{ 

    var name=document.getElementById('name').value
    var phone=document.getElementById('phone').value
    var username=document.getElementById('username').value
    var mail=document.getElementById('mail').value
    var password=document.getElementById('password').value
    var database= firebase.database()
        var adminref=database.ref('/drivers/'+username).set({
        email: mail,
        lg: 1,
        lt: 0,
        password: password,
        username: username,
        phone:phone,
        name:name
      });


}

function deletedriver()
{ 
    var admin=document.getElementById('username').value
    var database= firebase.database()
    var ref=database.ref('/drivers/'+admin)
   return ref.remove()
    
 


}
function updatedriver()
{ 
   
    
    var name=document.getElementById('name').value
    var phone=document.getElementById('phone').value
    var username=document.getElementById('username').value
    var mail=document.getElementById('mail').value
    var password=document.getElementById('password').value
    var ref=database.ref('/drivers/'+username).set({
        name: name,
        mail: mail,
        lg: 1,
        lt: 0,
        password: password,
        username: username,
        phone:phone
      });
    
   // return ref.push(admin)


}
function readadmin()
{ 
    var database= firebase.database()
    var admin=document.getElementById('name').value
    var adminref=database.ref('/drivers/'+admin)
    adminref.once('value',function(snapshot)
        {
            console.log(snapshot.val())


        });


}