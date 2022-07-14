import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して，初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liダグ作成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const completeTarget = completeButton.parentNode;

    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcompleteList(completeTarget);

    // TODO内容テキストを取得
    const text = completeTarget.firstElementChild.innerText;

    // div以下を初期化
    completeTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタンを作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div)を未入力リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromImcompleteList(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
