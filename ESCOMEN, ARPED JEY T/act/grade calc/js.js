function checks(){
var val = parseInt(document.getElementById("check").value); 
let st = document.getElementById("st");

if(val <= -1) {
 st.innerHTML = "Grade: ???";
} else if(val <= 74){
 st.innerHTML = "Grade: F";
}else if(val <= 76){
st.innerHTML = "Grade: C";
} else if(val <= 82){
st.innerHTML = "Grade: B";
}else if(val <= 88){
st.innerHTML="Grade: B+"
} else if(val <= 94){
st.innerHTML = "Grade: A"
} else if(val <= 100){
st.innerHTML = "Grade: A+"
} else{
st.innerHTML = "Such Grade Cant Exist"
}
}