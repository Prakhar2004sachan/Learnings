console.log("hello from javaScript");

const val1 = document.getElementById("val_1");
const val2 = document.getElementById("val_2");
const btn = document.querySelector(".btn");
const prog = document.querySelector(".code");
const resultContainer = document.querySelector(".result");

const sum = async function () {
  const first = Number(val1.value);
  const second = Number(val2.value);
  // fetch
  //   fetch("https://sum-server.100xdevs.com/sum?a=" + first + "&b=" + second).then(
  //     (res) => {
  //       console.log(res);
  //       res.text().then((res) => {
  //         console.log(res);
  //         resultContainer.innerHTML = `<h3>Sum is : ${res}</h3>`;
  //       });
  //     }
  //   );

  // async await
  const res = await fetch(
    "https://sum-server.100xdevs.com/sum?a=" + first + "&b=" + second
  );
  const result = await res.text();
  resultContainer.innerHTML = `<h3>Sum is : ${result}</h3>`;

  //   That's how noob do the code

  //   const result = first + second;
  //   res.innerHTML = `<h3>Sum is : ${result}</h3>`;
};

btn.addEventListener("click", sum);
prog.addEventListener("keypress", function (e) {
  if ((e.code = "Enter")) {
    sum();
  } else {
    console("Bunty tera sabun slow hai kya");
  }
});
