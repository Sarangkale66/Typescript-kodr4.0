let i:number = 0;
for (; i < 5; i++) {
  if (i === 3) 
    break;
  if (i === 1) 
    continue;
  console.log(i); // 0, 2
}

console.log(i);