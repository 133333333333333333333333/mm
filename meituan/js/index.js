// 主页轮播图

// 获取所有的html节点
let box = $('carousel');
let list = $('carousel-ul');
let ali = list.getElementsByTagName('li');
let list2 = $('index-ul');
let ali2 = list2.getElementsByTagName('li');
let prev = $('prev');
let next = $('next');

// 获取每个轮播li的宽度
let liWidth = ali[0].offsetWidth;

// 克隆第一个轮播li作为最后一个li
list.appendChild(ali[0].cloneNode(true));

// 获取轮播li的长度
let size = ali.length;

// 获取轮播ul的宽度
list.style.width = liWidth * size + 'px';

let index = 0; //表示即将显示的图片
// 设置定时器
let timer = setInterval(function () {
  index++;
  move();
}, 3000);

// 移动函数
function move() {
  // 控制右边界
  if (index >= size) {
    list.style.left = 0 + 'px';
    index = 1;
  }

  // 控制左边界
  if (index < 0) {
    list.style.left = -liWidth * (size - 1) + 'px';
    index = size - 2; //(即将显示倒是第二个li)
  }

  //动画移动
  animate(list, {
    left: -index * liWidth
  });

  // 控制下面li的显示
  for (let i = 0; i < ali2.length; i++) {
    // 如果即将要显示的li和下面的li索引对应，就将这个li显示
    if (index === i) {
      ali2[i].className = 'active';
    } else {
      ali2[i].className = '';
    }
  }
  // 还有一种情况是，当即将显示的是克隆的li时，下面的0号li应该被选中
  if (index === size - 1) {
    ali2[0].className = 'active';
  }
}

// 当鼠标移入box时，关闭定时器
box.onmouseenter = function () {
  prev.style.display = 'block';
  next.style.display = 'block';
  clearInterval(timer);
};

// 当鼠标移出时，定时器继续
box.onmouseleave = function () {
  prev.style.display = 'none';
  next.style.display = 'none';
  // 设表先关
  clearInterval(timer);
  timer = setInterval(function () {
    index++;
    move();
  }, 3000)
};

// 给下面的里添加移入事件
for (let i = 0; i < ali2.length; i++) {
  ali2[i].onmouseenter = function () {
    index = i;
    move();
  };
}

// 上一张的点击事件
prev.onclick = function () {
  index--;
  move();
};

// 下一张的点击事件
next.onclick = function () {
  index++;
  move();
};


// 正在热映鼠标移入事件
$('hotShow').onmouseover = function () {
  // 踩坑：offsetLeft和offsetTop只可读，无法改变其大小
  $('triangle2').style.left = 130 + 'px';
  $('triangle2').style.top = 29 + 'px';
  $('hotShow-ul').style.display = 'block';
  $('release-ul').style.display = 'none';
}

// 即将上映鼠标移入事件
$('release').onmouseover = function () {
  $('triangle2').style.left = 195 + 'px';
  $('triangle2').style.top = 29 + 'px';
  $('hotShow-ul').style.display = 'none';
  $('release-ul').style.display = 'block';
}

// 猫眼电影处的轮播

$('right-carousel').onclick = function () {
  animate($('catMovie-content'), {
    left: -1160
  });
}

$('left-carousel').onclick = function () {
  animate($('catMovie-content'), {
    left: 0
  });
}