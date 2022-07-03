/* 香氛蠟燭 */
const list_1 = [" 薰衣草 ", " 乳香 ", " 苦橙 ", " 佛手柑 ", " 玫瑰 "];
/*  融蠟燈 */
const list_2 = [" 原木 ", " 鵝卵石 ", " 大理石紋路 ", " Navy ", " Dark green "];
/*  擴香石 */
const list_3 = [" 一入組 ", " 二入組 ", " 三入組 ", " 四入組 ", " 五入組 "];
/*  擴香瓶 */
const list_4 = [
  " 花香調 ",
  " 檀木香 ",
  " 乾淨棉質 ",
  " 果香調 ",
  " 煙燻中性香 ",
];

let allProducts = [
  "【香氛蠟燭】- " + list_1,
  "【融蠟燈】- " + list_2,
  "【擴香石】- " + list_3,
  "【擴香瓶】- " + list_4,
];

const container = document.querySelector(".container");
console.log(container);

// 這是closeList的功能,一次清除container裡面所有內容
const closeList = () => {
  container.innerHTML = "";
};

const appendList = () => {
  // closeList();
  for (let index = 0; index < allProducts.length; index++) {
    const openList = document.createElement("div");

    // 以下兩種都可以用來新增class
    // openList.className = "open-list";
    openList.classList.add("open-list");

    const openListText = document.createTextNode(allProducts[index]);

    openList.appendChild(openListText);

    container.appendChild(openList);
  }
};
