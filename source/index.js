const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["1", 2, { num: "3" }]);
    }, 200);
  });
};

const printUser = async () => {
  let user = await getUser();
  console.log(user);
};

printUser();
