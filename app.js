function Even(number){
    if (number % 2===0){
        return true;
    } else {
        return false;
    }
}
console.log(Even(10));
console.log(Even(15));

function martkutxedi(a ,b){
    return a*b;
}
console.log(martkutxedi(5 ,10))

function kvadrati(c){
    return c*c;
}
console.log(kvadrati(7 ,7))

// მეოთხე ვერ გავაკეთე

function studentebi(sia){
	const studentebisaxelisgareshe=sia.filter(characters => characters.alternate_names.length===0);
    return studentebisaxelisgareshe;
}
// ვერც ეს
