const funChal = (input: string[]): number => {
  let a = 10;
  a = 40 + 3;

  input.forEach((el: string, i: number) => {
    console.log("hi");
    const bool = true;
    a++;
  });
  console.log(a);
  return a;
};

// funChal(["hi", "bye"]);
// ans: O(N)

const anotherChal = (input: number[]): void => {
  let a = 5;
  let b = 15;
  let c = 35;

  input.forEach((_el: number, i: number) => {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  });

  input.forEach((_el: number, i: number) => {
    let p = i * 2;
    let q = i * 2;
  });

  const whoAmI: string = "idk";
};

//ans O(N)
