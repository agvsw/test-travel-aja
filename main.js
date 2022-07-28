
function currency(input){
  const money = [100000, 50000, 20000, 10000,  5000, 2000, 1000, 500, 200, 100]
  let result = {};
  temp = input;
  for(let i = 0 ; i < money.length ; i++){
    if(temp == 0){
      break;
    }
    if(money[i] > temp){
      continue;
    }
    let hasil = Math.round(temp / money[i]);
    result = {...result, [`Rp ${[money[i]]}`] : hasil}
    temp = temp % money[i];
    
  }
  console.log(result);
}

function changeReplceString(input1, input2){
  let arr1 = input1.split('');
  let arr2 = input2.split('');

  if((arr1.length - arr2.length > 1) || (arr1.length - arr2.length < -1)){
    return false;
  }

  const batas = arr1.length > arr2.length ? arr1.length : arr2.length;
  let longestArr= arr1.length > arr2.length ? arr1 : arr2;
  const nameLongest =  arr1.length > arr2.length ? 'arr1' : 'arr2';

  let count = 0;
  if(arr1.length == arr2.length){
    for(let i = 0 ; i < batas ; i++) {
      if(arr1[i] != arr2[i]){
        count++;
      }    
    }
  }else {
    for(let i = 0 ; i < batas ; i++) {
      if(arr1[i] != arr2[i]){
        if(nameLongest == 'arr1'){
          const temp = arr2;
          arr2 = [...temp.slice(0, i), arr1[i], ...temp.slice(i, arr2.length)];
        }
        if(nameLongest == 'arr2'){
          const temp = arr1;
          arr1 = [...temp.slice(0, i), arr1[i], ...temp.slice(i, arr2.length)];
        }
        count++;
      }
    }
  }

  return count <= 1;
}


// soal no 1
currency(200100)

// soal no 2
console.log(changeReplceString('telkom', 'tlkomxx'));



