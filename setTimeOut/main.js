const time = new Promise((print) => {
    print(
      setTimeout(() => {
        console.log("trung");
        console.log("Null");
      }, 3000)
    );
  });