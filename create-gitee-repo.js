// Gitee 仓库创建脚本
// 使用浏览器自动化创建仓库

var username = "yxli891230";
var repoName = "ai-keywords-app";
var description = "AI绘画关键词宝库";

// 打开 Gitee 创建页面
window.location.href = "https://gitee.com/projects/new";

// 等待页面加载后自动填写表单
setTimeout(function() {
  // 尝试填写仓库名称
  var nameInput = document.querySelector('input[name="repo_name"]') ||
                  document.querySelector('#repo_name') ||
                  document.querySelector('input[placeholder*="仓库名称"]');

  if (nameInput) {
    nameInput.value = repoName;
    console.log('已填写仓库名称');
  }

  // 尝试填写简介
  var descInput = document.querySelector('textarea[name="repo_desc"]') ||
                  document.querySelector('#repo_desc');

  if (descInput) {
    descInput.value = description;
    console.log('已填写简介');
  }

  // 选择公开
  var publicRadio = document.querySelector('input[value="public"]') ||
                    document.querySelector('input[value="1"]');

  if (publicRadio) {
    publicRadio.checked = true;
    console.log('已选择公开');
  }

  console.log('表单填写完成，请点击"创建"按钮');
}, 2000);
