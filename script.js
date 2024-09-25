let arr1 = []

function newFunction() {
  const str = prompt('ism kriting')
  let arr = str.split(" ")

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'add') {
      arr1.push(arr[1])
    } else if (arr[i] == 'del') {
      arr1.splice(1, 1)
    }
  }
  console.log(arr1);

  newFunction()
}

newFunction()

